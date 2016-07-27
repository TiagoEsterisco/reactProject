import React from 'react';
import { connect } from 'react-redux'

import { fetchEvent, createEvent  } from '../actions/eventAction'
import { getCurrentFilter  } from '../actions/filterAction'

import FilterList from './FilterList'
import Events from './Events'
import Notification from './Notification'
import SearchEvent from './SearchEvent'

@connect((store) => {
    return {
        events: store.events,
        filters: store.filters
    }
})

export default class Layout extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchEvent());
        this.props.dispatch(getCurrentFilter());
    }

    addNewEvent(){
        this.props.dispatch(createEvent());
    }

    render() {
        const { notification, list, currentFilter } = this.props.filters;

        return ( <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <Notification notification={notification} dispatch={this.props.dispatch}/>
                            <Events events={this.props.events}></Events>
                            <FilterList filtersList= {list} currentFilter={currentFilter} dispatch={this.props.dispatch} />
                            <SearchEvent currentFilter={currentFilter} dispatch={this.props.dispatch}/>

                            <br/>


                            <button class="btn btn-info" onClick={this.addNewEvent.bind(this)}> Create event </button>
                            <h5><small>If have filter for Location: South, Topic: 'flux', 'reflux', 'redux', Date Range: 2016-08-24 - 2016-08-26 </small></h5>
                            <h5><small>Will trigger notification </small></h5>
                        </div>
                    </div>
                 </div>
        );
    }
}
