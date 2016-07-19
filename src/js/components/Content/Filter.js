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

    filterEvent(filterType, e) {
        let filterData = e.target.value;
        if(filterType === 'location'){
            this.filter.location = filterData;
            EventsAction.filterEventByLocation(filterData);
        } else if(filterType === 'topic'){
            this.filter.topic = filterData;
            EventsAction.filterEventByTopic(filterData);
        }
    }

    setDateRange(filterType, e){
        let filterData = e.target.value;
        if(filterType === 'from'){
            this.dateRangeFrom = filterData;
        } else if( filterType === 'to') {
            this.dateRangeTo = filterData;
        }

        if(this.dateRangeFrom && this.dateRangeTo){
            let datesFilter = {
                from: this.dateRangeFrom,
                to: this.dateRangeTo
            };
            this.filter.dates = datesFilter;
            EventsAction.filterEventByDateRange(datesFilter);
        }
    }
    setFilterName(e){
        this.filterName = e.target.value;
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
    <div class="col-sm-4">
        <form class="form-inline">
            <div class="form-group col-sm-6">
                <label>Topic</label>
                <input class="form-control" placeholder="JavaScript" value={this.filter.topic} onChange={this.filterEvent.bind(this, 'topic')} />
                <label >Location</label>
                <input class="form-control" placeholder="West Kensington" value={this.filter.location} onChange={this.filterEvent.bind(this, 'location')} />
            </div>
            <div class="form-group col-sm-6">
                <label>From: </label>
                <input class="form-control" type="date" name="from" value={this.filter.date.from} onChange={this.setDateRange.bind(this, 'from')}/>
                <label >To: </label>
                <input class="form-control" type="date" name="to" value={this.filter.date.to} onChange={this.setDateRange.bind(this, 'to')}/>
            </div>
        </form>
        <div class="col-sm-12">
            <form class="form-inline pull-right">
                <div class="form-group">
                    <label for="inputPassword2" class="sr-only">Save filter</label>
                    <input type="text" class="form-control" placeholder="My filter" value={this.filter.name} onChange={this.setFilterName.bind(this)}/>
                </div>
                <button type="submit" class="btn btn-success" onClick={this.saveFilter.bind(this)}>Save</button>
            </form>
        </div>
    </div>
</div>



        );
    }
}
