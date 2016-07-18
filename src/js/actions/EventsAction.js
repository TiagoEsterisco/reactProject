import dispatcher from '../dispatcher';

export function createEvent(event){
    dispatcher.dispatch({
        type: 'CREATE_EVENT',
        event
    });
}

export function filterEventByTopic(text){
    dispatcher.dispatch({
        type: 'FILTER_EVENT_BY_TOPIC',
        text
    });
}

export function filterEventByLocation(text){
    dispatcher.dispatch({
        type: 'FILTER_EVENT_BY_LOCATION',
        text
    });
}

export function filterEventByDateRange(datesFilter){
    dispatcher.dispatch({
        type: 'FILTER_EVENT_BY_DATE_RANGE',
        datesFilter
    });
}
