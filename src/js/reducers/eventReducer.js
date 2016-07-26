export default function reducer(state={
    list: [],
    filtered : {
        list: [],
        hasResults: false,
        isUserFiltering: false
    }
}, action) {
    switch (action.type) {

        case 'FETCH_EVENTS': {
            return {...state, list : action.payload}
        };
        case 'FILTER_EVENT' : {

            let hasResults = false;
            let isUserFiltering = true;
            let list = state.list;

            // Location filter
            if(action.payload.location){
                list = state.list.filter((event) => {
                    return event.location.toLowerCase().indexOf(action.payload.location.toLowerCase()) >= 0;
                });
            }

            // Topic filter
            if(action.payload.topic){
                list = list.filter((event) => {
                    return event.topics.toString().indexOf(action.payload.topic.toLowerCase()) >= 0;
                });
            }

            // Date range filter
            if(action.payload.from && action.payload.to){
                let filterFrom = new Date(action.payload.from);
                let filterTo = new Date(action.payload.to);
                let eventDate;
                list = list.filter((event) => {
                    eventDate = new Date(event.date);
                    return eventDate > filterFrom &&  eventDate < filterTo;
                });
            }

            if(list.length > 0){
                hasResults = true;
            }

            let filtered = {
                list,
                hasResults,
                isUserFiltering
            }

            return {...state, filtered};
        }
        case 'CREATE_EVENT' : {

            let list = [...state.list, action.payload]
            return {...state, list}
        }
    }
    return state
}
