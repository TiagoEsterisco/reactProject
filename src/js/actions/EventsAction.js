import dispatcher from '../dispatcher';

export function createEvent(event){
    dispatcher.dispatch({
        type: 'CREATE_EVENT',
        event
    });
}

export function filterEvent(filter){
    dispatcher.dispatch({
        type: 'FILTER_EVENT',
        filter
    });
}
