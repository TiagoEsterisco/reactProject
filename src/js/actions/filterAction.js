export function setFilter(id){
    return {
        type: 'SET_FILTER',
        payload: id
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

export function saveFilter(){
    return {
        type: 'SAVE_FILTER',
    }
};

export function clearFilter(){
    return {
        type: 'CLEAR_FILTER',
        payload: {}
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
