import React from 'react';
import { connect } from 'react-redux'

// Event events
import { fetchEvent, createEvent  } from '../actions/eventAction'

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
    }

    addNewEvent(){
        this.props.dispatch(createEvent());
    }

    render() {
        const { notification, list } = this.props.filters;
        let savedFilters;


        if(list.length){
            let option = list.map(filter => {
                return <option key={filter.id} value={filter.id}>{filter.name}</option>
            });
            savedFilters = <div><p> Saved Filters: </p><select>{option}</select></div>
        }

        return ( <div>
                    <Notification notification={notification} dispatch={this.props.dispatch}/>
                    <Events events={this.props.events}></Events>
                    <SearchEvent dispatch={this.props.dispatch}/>

                    <br/>

                    {savedFilters}
                    <button onClick={this.addNewEvent.bind(this)}> Create event </button>
                 </div>
        );
    }
}
