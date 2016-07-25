export function fetchFilter(filter){
    return {
        type: 'CREATE_FILTER',
        payload: filter
    }
};

export function setCurrentFilter(filter){
    return {
        type: 'SET_CURRENT_FILTER',
        payload: filter
    }
};
