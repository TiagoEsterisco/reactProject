export function fetchFilter(filter){
    return {
        type: 'CREATE_FILTER',
        payload: filter
    }
};

export function getCurrentFilter(){
    return {
        type: 'GET_CURRENT_FILTER'
    }
};

export function setCurrentFilter(filter){
    return {
        type: 'SET_CURRENT_FILTER',
        payload: filter
    }
};

export function saveFilter(filter){
    return {
        type: 'SAVE_FILTER',
        payload: filter
    }
};

export function discardNotification(){
    return {
        type: 'DISCARD_NOTIFICATION',
        payload: {
            haveMatch: false,
            filter: {}
        }
    }
};
