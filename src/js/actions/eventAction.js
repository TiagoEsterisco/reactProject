export function fetchEvent(){
    return {
        type: 'FETCH_EVENTS',
        payload: {}
    }
};

export function filterEvent(filter){
    return {
        type: 'FILTER_EVENT',
        payload: filter
    }
};

export function createEvent(){
    return {
        type: 'CREATE_EVENT',
        payload: {
                    location: 'South Kensington',
                    id: Date.now(),
                    startTime: '17:00',
                    date: '2016-08-25',
                    topics: ['flux', 'reflux', 'redux']
                }
    }
};
