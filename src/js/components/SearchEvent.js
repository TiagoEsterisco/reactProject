import React from 'react';

import { filterEvent } from '../actions/eventAction'
import { setCurrentFilter, saveFilter, clearFilter  } from '../actions/filterAction'

export default class SearchEvent extends React.Component {
    filterEvent(filterType, filterValue) {
        let filter = {};
        filterValue = filterValue.target.value;
        filter[filterType] = filterValue;

        this.props.dispatch(setCurrentFilter(filter));
        this.props.dispatch(filterEvent(this.props.currentFilter));
    }

    setFilterName(e){
        this.props.dispatch(setCurrentFilter({name: e.target.value}));
    }

    saveFilter() {
        this.props.dispatch(setCurrentFilter({id: Date.now()}));
        this.props.dispatch(saveFilter());
        this.clearFilter();
    }

    clearFilter() {
        this.props.dispatch(clearFilter());
    }

    render() {
        const {currentFilter} = this.props;
        return (
            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-xs-6">
                        <label  class="control-label">Location</label>
                        <input  class="form-control" placeholder="Location" onChange={this.filterEvent.bind(this,'location')}  value={currentFilter.location}/>
                        <label  class="control-label">Topic</label>
                        <input  class="form-control" placeholder="Topic" onChange={this.filterEvent.bind(this,'topic')}  value={currentFilter.topic}/>
                    </div>
                    <div class="col-xs-6">
                        <label  class="control-label">Date From</label>
                        <input  class="form-control" type="date" name="from" onChange={this.filterEvent.bind(this,'from')} value={currentFilter.from}/>
                        <label  class="control-label">Date To</label>
                        <input  class="form-control" type="date" name="to" onChange={this.filterEvent.bind(this,'to')} value={currentFilter.to}/>
                    </div>
                    <div class="col-xs-6">
                        <label  class="control-label">Filter Name</label>
                        <input  class="form-control" placeholder="Filter name" onChange={this.setFilterName.bind(this)}  value={currentFilter.name} />
                    </div>
                    <br />
                </div>
                <div class="form-group">
                    <div class="col-xs-6">
                        <button  class="btn btn-success col-xs-6" onClick={this.saveFilter.bind(this)}>Save Filter</button>
                        <button  class="btn btn-primary col-xs-5 col-xs-offset-1" onClick={this.clearFilter.bind(this)}>Clear Filter</button>
                    </div>
                </div>
            </div> );
    }
}
