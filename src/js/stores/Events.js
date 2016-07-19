import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class Events extends EventEmitter {
    constructor() {
        super();

        // STUB API CALL
        const events = [{
            id: 1,
            location: 'West Kensington',
            date: {
                start: 'Fri Jul 15 2016 12:19:44 GMT+0100 (BST)'
            },
            topic: 'Html Css',
        }, {
            id: 2,
            location: 'Piccadilly Circus',
            date: {
                start: 'Fri Jul 18 2016 12:19:44 GMT+0100 (BST)'
            },
            topic: 'Clean Code',
        }, {
            id: 3,
            location: 'Hammersmith',
            date: {
                start: 'Fri Jul 11 2016 12:19:44 GMT+0100 (BST)',
            },
            topic: 'JavaScript',
        },{
            id: 4,
            location: 'Hammersmith',
            date: {
                start: 'Fri Jul 10 2016 12:19:44 GMT+0100 (BST)',
            },
            topic: 'Html',
        },
        {
            id: 5,
            location: 'Hammersmith',
            date: {
                start: 'Fri Jul 11 2016 10:19:44 GMT+0100 (BST)',
            },
            topic: 'Sass',
        }];

        this.setEvents(events);
    }

    setEvents(events){
        this.fetched = events;
        this.events = this.fetched;
    }

    getInitialList(){
        return this.fetched;
    }

    getAll(){
        return this.events;
    }

    createEvent(newEvent) {
        this.events.push(newEvent);
        this.emit('change');
    }

    filterEventByTopic(eventName) {
        const events = this.getInitialList();
        this.events = events.filter((event) => {
            return event.topic.toLowerCase().indexOf(eventName.toLowerCase()) >= 0;
        });
        this.emit('change');
    }

    filterEventByLocation(eventName) {
        const events = this.getInitialList();
        this.events = events.filter((event) => {
            return event.location.toLowerCase().indexOf(eventName.toLowerCase()) >= 0;
        });
        this.emit('change');
    }

    filterEventByDateRange(datesObj) {
        const events = this.getInitialList();

        this.events = events.filter((event) => {
            let eventDate = new Date(event.date.start);
            let filterFrom = new Date(datesObj.from);
            let filterTo = new Date(datesObj.to);

            return eventDate > filterFrom &&  eventDate < filterTo;
        });

        this.emit('change');
    }

    handleAction(action) {
        switch(action.type) {
            case 'CREATE_EVENT': {
                this.createEvent(action.event);
                break;
            }
            case 'FILTER_EVENT_BY_TOPIC': {
                this.filterEventByTopic(action.text);
                break;
            }
            case 'FILTER_EVENT_BY_LOCATION': {
                this.filterEventByLocation(action.text);
                break;
            }
            case 'FILTER_EVENT_BY_DATE_RANGE': {
                this.filterEventByDateRange(action.datesFilter);
                break;
            }
        }
    }
}

const events = new Events;
dispatcher.register(events.handleAction.bind(events));
export default events;
