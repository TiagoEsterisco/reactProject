import React from 'react';
import { connect } from 'react-redux'

// Event events
import { fetchEvent, createEvent  } from '../actions/eventAction'
import { setCurrentFilter, discardNotification  } from '../actions/filterAction'

import Events from './Events'
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
    }


    addNewEvent(){
        this.props.dispatch(createEvent());
    }

    saveFilter(){
        console.log('Save filter: ', this.props);
        // this.props.dispatch(createFilter())
    }

    discardNotification(){
        this.props.dispatch(discardNotification())
    }

    render() {

        const { notification } = this.props.filters
        let notifyUser;

        if(notification.haveMatch){
            notifyUser = <h1 onClick={this.discardNotification.bind(this)}> One of your filters match new event </h1>;
        }

        return ( <div>
                    {notifyUser}
                    <Events events={this.props.events}></Events>
                    <SearchEvent dispatch={this.props.dispatch}/>
                    <button onClick={this.saveFilter.bind(this)}> Save filter </button>
                    <button onClick={this.addNewEvent.bind(this)}> Create event </button>
                 </div>
        );
    }
}
