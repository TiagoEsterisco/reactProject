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
        } else if(filterType === 'topic'){
            this.filter.topic = filterData;
        }

        EventsAction.filterEvent(this.filter);
    }

    filterEventByDateRange(filterType, e){
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
            this.filter.date = datesFilter;
            EventsAction.filterEvent(this.filter);
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
                            <input class="form-control" placeholder="JavaScript" onChange={this.filterEvent.bind(this, 'topic')} />
                            <label >Location</label>
                            <input class="form-control" placeholder="West Kensington" onChange={this.filterEvent.bind(this, 'location')} />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>From: </label>
                            <input class="form-control" type="date" name="from" onChange={this.filterEventByDateRange.bind(this, 'from')}/>
                            <label >To: </label>
                            <input class="form-control" type="date" name="to"  onChange={this.filterEventByDateRange.bind(this, 'to')}/>
                        </div>
                    </form>
                    <div class="col-sm-12">
                        <form class="form-inline pull-right">
                            <div class="form-group">
                                <label for="inputPassword2" class="sr-only">Save filter</label>
                                <input type="text" class="form-control" placeholder="My filter" onChange={this.setFilterName.bind(this)}/>
                            </div>
                            <button type="submit" class="btn btn-success" onClick={this.saveFilter.bind(this)}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
