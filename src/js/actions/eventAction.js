export function fetchEvent(){

    let eventsList = [{
        location: 'West Kensington',
        id: 1,
        startTime: '14:00',
        date: '2016-07-25',
        topics: ['html', 'javascript', 'css']
    },{
        location: 'South Kensington',
        id: 2,
        startTime: '14:00',
        date: '2016-07-26',
        topics: ['react', 'redux']
    },{
        location: 'West Kensington',
        id: 3,
        startTime: '14:00',
        date: '2016-08-28',
        topics: ['react', 'flux']
    }];

    return {
        type: 'FETCH_EVENTS',
        payload: eventsList
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
