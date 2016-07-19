import dispatcher from '../dispatcher';

export function createFilter(filter){
    dispatcher.dispatch({
        type: 'CREATE_FILTER',
        filter
    });
}

export function loadFilter(filterId){
    dispatcher.dispatch({
        type: 'LOAD_FILTER',
        filterId
    });
}
