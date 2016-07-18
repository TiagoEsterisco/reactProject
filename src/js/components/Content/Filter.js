import React from "react";
import * as EventsAction from '../../actions/EventsAction';

export default class Filter extends React.Component {

    filterEvent(filterType, e) {
        let filterData = e.target.value;
        if(filterType === 'location'){
            EventsAction.filterEventByLocation(filterData);
        } else if(filterType === 'topic'){
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
            EventsAction.filterEventByDateRange(datesFilter);
        }
    }


    render() {
        return (
            <div>
                <h4>Filter: </h4>
                <form class="form-horizontal">
                  <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Topic</label>
                        <div class="col-sm-10">
                            <input class="form-control" placeholder="JavaScript" onChange={this.filterEvent.bind(this, 'topic')} />
                        </div>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Location</label>
                        <div class="col-sm-10">
                            <input class="form-control" placeholder="West Kensington" onChange={this.filterEvent.bind(this, 'location')} />
                        </div>
                      </div>
                  </div>

                  <div class="col-sm-12">
                      <div class="col-sm-6">
                          <div class="form-group">
                            <label class="col-sm-2 control-label">From: </label>
                            <div class="col-sm-10">
                                <input class="form-control" type="date" name="from" onChange={this.setDateRange.bind(this, 'from')}/>
                            </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">To: </label>
                            <div class="col-sm-10">
                                <input class="form-control" type="date" name="to" onChange={this.setDateRange.bind(this, 'to')}/>
                            </div>
                          </div>
                      </div>
                </div>
                </form>
                <div class="col-sm-6 col-sm-offset-6">
                    <form class="form-inline">
                        <div class="col-sm-8">
                            <div class="form-group">
                                <label for="inputPassword2" class="sr-only">Save filter</label>
                                <input type="text" class="form-control" placeholder="My filter" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <button type="submit" class="btn btn-success" onClick="saveFilter">Save</button>
                        </div>
                    </form>
                  </div>
            </div>
        );
    }
}
