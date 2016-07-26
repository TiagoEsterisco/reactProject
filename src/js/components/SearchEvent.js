import React from 'react';

import { fetchEvent, filterEvent, createEvent  } from '../actions/eventAction'
import { setCurrentFilter, saveFilter  } from '../actions/filterAction'

export default class SearchEvent extends React.Component {
    componentWillMount(){}

    filterEvent(filterType, filterValue) {
        let filter = {};
        filterValue = filterValue.target.value;
        filter[filterType] = filterValue;

        this.props.dispatch(setCurrentFilter(filter));
        this.props.dispatch(filterEvent(filter));
    }

    setFilterName(e){
        this.filter.name = e.target.value;
    }

    saveFilter() {
        this.filter.id = Date.now();
        this.props.dispatch(saveFilter(this.filter));
        this.clearFilter();
    }

    clearFilter() {
        this.filter = {};
        this.props.dispatch(filterEvent(this.filter));
    }

    render() {
        const {currentFilter} = this.props;
        return (
            <div>
                <input placeholder="Location" onChange={this.filterEvent.bind(this,'location')}  value={currentFilter.location}/>
                <input placeholder="Topic" onChange={this.filterEvent.bind(this,'topic')}  value={currentFilter.topic}/>
                <input type="date" name="from" onChange={this.filterEvent.bind(this,'from')} value={currentFilter.from}/>
                <input type="date" name="to" onChange={this.filterEvent.bind(this,'to')} value={currentFilter.to}/>
                <input placeholder="Filter name" onChange={this.setFilterName.bind(this)}  value={currentFilter.name} />
                <button onClick={this.saveFilter.bind(this)}>Save Filter</button>
                <button onClick={this.clearFilter.bind(this)}>Clear Filter</button>
            </div> );
    }
}
