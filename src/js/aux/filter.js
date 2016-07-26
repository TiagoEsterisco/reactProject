export function filterLocation(eventsList, userFilter){
    return eventsList.filter((event) => {
        return event.location.toLowerCase().indexOf(userFilter.toLowerCase()) >= 0;
    });
};

export function filterTopic(eventsList, userFilter){
    return eventsList.filter((event) => {
        return event.topics.toString().toLowerCase().indexOf(userFilter.toLowerCase()) >= 0;
    });
};

export function filterRange(eventsList, filterFrom, filterTo){
    filterFrom = new Date(filterFrom);
    filterTo = new Date(filterTo);
    let eventDate;

    return eventsList.filter((event) => {
        eventDate = new Date(event.date);
        return eventDate > filterFrom &&  eventDate < filterTo;
    });
};

export function filterAll(EventsList, userFilter){

    // Location filter
    if(userFilter.location){
        EventsList = filterLocation(EventsList, userFilter.location);
    }

    // Topic filter
    if(userFilter.topic){
        EventsList = filterTopic(EventsList, userFilter.topic);
    }

    // Date range filter
    if(userFilter.from && userFilter.to){
        EventsList = filterRange(EventsList, userFilter.from, userFilter.to)
    }
    return EventsList;
};
