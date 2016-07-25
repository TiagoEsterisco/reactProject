import React from 'react';
import { connect } from 'react-redux'

// Event events
import { fetchEvent, filterEventByLocation, createEvent  } from '../actions/eventAction'
import { setCurrentFilter, discardNotification  } from '../actions/filterAction'

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

    filterEventByLocation(e) {
        let value = e.target.value;
        this.props.dispatch(filterEventByLocation(value));
        this.props.dispatch(setCurrentFilter(value));
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

        const { list, filtered } = this.props.events
        const { notification } = this.props.filters

        let mappedEvents;
        let notifyUser;
        console.log(this.props.filters);


        if(filtered.hasResults){
            mappedEvents = filtered.list.map(filteredList => {
                return <li>{filteredList.location}</li>
            });
        } else {
            mappedEvents = 'No event match your filter';
            // mappedEvents = list.map(event => {
            //     return <li>{event.location}</li>
            // });
        }

        if(notification.haveMatch){
            notifyUser = <h1 onClick={this.discardNotification.bind(this)}> One of your filters match new event </h1>;
        }




        return ( <div>
                    {notifyUser}
                    <ul> {mappedEvents} </ul>
                    <input onChange={this.filterEventByLocation.bind(this)}/>
                    <button onClick={this.saveFilter.bind(this)}> Save filter </button>
                    <button onClick={this.addNewEvent.bind(this)}> Create event </button>
                 </div>
        );
    }
}
