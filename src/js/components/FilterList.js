import React from 'react';
import { setFilter } from '../actions/filterAction'
import { filterEvent } from '../actions/eventAction'


export default class FilterList extends React.Component {


    loadFilter() {
        // this.props.dispatch()
    }

    setSelectedFilter(e){
        this.props.dispatch(setFilter(e.target.value));
        this.props.dispatch(filterEvent(this.props.currentFilter));
    }

    render() {
        const {filtersList} = this.props
        let savedFilters;

        if(filtersList.length){
            let option = filtersList.map(filter => {
                return <option key={filter.id} value={filter.id}  >{filter.name}</option>
            });
            savedFilters =  <div> <p> Saved Filters: </p> <select class="form-control" onChange={this.setSelectedFilter.bind(this)}>{option}</select></div>
        }
        return (
            <div>
                {savedFilters}
            </div> );
    }
}
