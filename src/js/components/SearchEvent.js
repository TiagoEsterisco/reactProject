import React from 'react';

import { fetchEvent, filterEvent, createEvent  } from '../actions/eventAction'
import { setCurrentFilter, saveFilter  } from '../actions/filterAction'

export default class SearchEvent extends React.Component {
    componentWillMount(){
        this.filter = {};
    }

    filterEvent(filterType, e) {
        let value = e.target.value;

        switch (filterType) {
            case 'location':
                this.filter.location =  value;
                break;
            case 'topic':
                this.filter.topic =  value;
                break;
            case 'from':
                this.filter.from =  value;
                break;
            case 'to':
                this.filter.to =  value;
                break;
        }

        this.props.dispatch(filterEvent(this.filter));
        this.props.dispatch(setCurrentFilter(this.filter));
    }

    setFilterName(e){
        this.filter.name = e.target.value;
    }

    saveFilter() {
        this.filter.id = Date.now();
        this.props.dispatch(saveFilter(this.filter));
    }

    clearFilter() {
        this.filter = {};
        this.props.dispatch(filterEvent(this.filter));
    }

    render() {

        return (
            <div>
                <input placeholder="Location" onChange={this.filterEvent.bind(this,'location')}  value={this.filter.location}/>
                <input placeholder="Topic" onChange={this.filterEvent.bind(this,'topic')}  value={this.filter.topic}/>
                <input type="date" name="from" onChange={this.filterEvent.bind(this,'from')} value={this.filter.from}/>
                <input type="date" name="to" onChange={this.filterEvent.bind(this,'to')} value={this.filter.to}/>
                <input placeholder="Filter name" onChange={this.setFilterName.bind(this)}  value={this.filter.name} />
                <button onClick={this.saveFilter.bind(this)}>Save Filter</button>
                <button onClick={this.clearFilter.bind(this)}>Clear Filter</button>
            </div> );
    }
}
