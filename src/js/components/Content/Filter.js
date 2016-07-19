import React from "react";
import * as EventsAction from '../../actions/EventsAction';
import * as FiltersAction from '../../actions/FiltersAction';

export default class Filter extends React.Component {

    constructor(){
        super();
        this.filter ={
            date: {}
        };
    }


    setFilterEvent(filterType, e) {
        let filterData = e.target.value;

        if(filterType === 'location'){
            this.filter.location = filterData;
            this.props.selectedFilter.location = filterData;
        } else if(filterType === 'topic'){
            this.filter.topic = filterData;
            this.props.selectedFilter.topic = filterData;
        } else if(filterType === 'from'){
            this.dateRangeFrom = filterData;
            this.props.selectedFilter.date.from = filterData;
        } else if( filterType === 'to') {
            this.dateRangeTo = filterData;
            this.props.selectedFilter.date.to = filterData;
        }
        if(this.dateRangeFrom && this.dateRangeTo){
            let datesFilter = {
                from: this.dateRangeFrom,
                to: this.dateRangeTo
            };
            this.filter.date = datesFilter;
        }
        EventsAction.filterEvent(this.filter);
    }

    setFilterName(e){
        this.filterName = e.target.value;
        this.props.selectedFilter.name = this.filterName;
    }

    saveFilter(){
        let filterData = {
            name : this.filterName,
            location: this.filter.location,
            topic: this.filter.topic,
            dates: this.filter.dates
        };
        FiltersAction.createFilter(filterData);
    }

    formatDate(date) {
        if(!date) {
            return;
        }
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    render() {
        return (
            <div>
                <h4>Filter: </h4>
                <div class="col-sm-5">
                    <form class="form-horizontal">
                        <div class="form-group col-sm-6">
                            <label>Topic</label>
                            <input class="form-control" placeholder="JavaScript" value={this.props.selectedFilter.topic} onChange={this.setFilterEvent.bind(this, 'topic')} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Location</label>
                            <input class="form-control" placeholder="West Kensington" value={this.props.selectedFilter.location} onChange={this.setFilterEvent.bind(this, 'location')} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>From: </label>
                            <input class="form-control" type="date" name="from" value={this.formatDate(this.props.selectedFilter.date.from)} onChange={this.setFilterEvent.bind(this, 'from')}/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label >To: </label>
                            <input class="form-control" type="date" name="to"  value={this.formatDate(this.props.selectedFilter.date.to)} onChange={this.setFilterEvent.bind(this, 'to')}/>
                        </div>
                    </form>

                    <form class="form-horizontal">
                        <div class="form-group col-sm-8">
                            <input type="text" class="form-control" placeholder="Filter name" value={this.props.selectedFilter.name} onChange={this.setFilterName.bind(this)}/>
                        </div>
                        <div class="form-group col-sm-4">
                        <button type="submit" class="btn btn-success" onClick={this.saveFilter.bind(this)}>Save</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
