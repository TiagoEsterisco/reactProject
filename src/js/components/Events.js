import React from 'react';
import Event from './sub-component/Event';

export default class Events extends React.Component {
    componentWillMount(){
    }

    render() {

        const { list, filtered } = this.props.events
        let mappedEvents;

        if(filtered.isUserFiltering){
            mappedEvents = filtered.list.map(filteredList => {
                return <Event key={filteredList.id} event={filteredList}/>
            });

            if(!filtered.hasResults){
                mappedEvents = 'No event match your filter';
            }

        } else {
            mappedEvents = list.map(event => {
                return <Event key={event.id} event={event}/>
            });
        }

        return ( <ul class="list-group"> {mappedEvents} </ul> );
    }
}
