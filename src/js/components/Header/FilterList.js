import React from "react";
import * as EventsAction from '../../actions/EventsAction';
import * as FiltersAction from '../../actions/FiltersAction';

export default class FilterList extends React.Component {

        loadFilter(e) {
            let filterId = e.target.value;
            FiltersAction.loadFilter(filterId);
        }
        render() {

        // Default
        let Filters = () => {return <option value="1">Filters</option>};

        if(this.props.filters){
            Filters = this.props.filters.map( (filter) => {
                return <option key={filter.id} value={filter.id}>{filter.name}</option>
            });
        }

        return (
            <div class="col-sm-4 pull-right navbar-brand">
                <small>Filters:</small>
                <select class="form-control input-sm" value="0" onChange={this.loadFilter.bind(this)}>
                    <option disabled value="0">Filters</option>
                    {Filters}
                </select>

            </div>
        );
    }
}
