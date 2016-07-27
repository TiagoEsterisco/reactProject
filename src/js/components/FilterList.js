import React from 'react';
import { setFilter } from '../actions/filterAction'


export default class FilterList extends React.Component {


    loadFilter() {
        // this.props.dispatch()
    }

    setSelectedFilter(e){
        this.props.dispatch(setFilter(e.target.value));
    }

    render() {
        const {filtersList} = this.props
        let savedFilters;

        if(filtersList.length){
            let option = filtersList.map(filter => {
                return <option key={filter.id} value={filter.id}  >{filter.name}</option>
            });
            savedFilters =  <div> <p> Saved Filters: </p> <select onChange={this.setSelectedFilter.bind(this)}>{option}</select></div>
        }
        return (
            <div>
                {savedFilters}
            </div> );
    }
}
