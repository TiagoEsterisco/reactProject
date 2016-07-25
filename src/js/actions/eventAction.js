export function fetchEvent(){

    let eventsList = [{
        location: 'West Kensington'
    },{
        location: 'South Kensington'
    },{
        location: 'West Kensington'
    }];

    return {
        type: 'FETCH_EVENTS',
        payload: eventsList
    }
};

export function filterEventByLocation(text){
    return {
        type: 'FILTER_EVENT_BY_LOCATION',
        payload: text
    }
};

export function createEvent(){
    return {
        type: 'CREATE_EVENT',
        payload: {location: 'Viana'}
    }
};
