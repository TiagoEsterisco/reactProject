import {filterAll} from '../aux/filter'

export default function reducer(state={
    list: [],
    currentFilter: {
        location: '',
        topic: '',
        from:'',
        to: '',
        name: ''
    },
    notification: {
        haveMatch: false,
        filters: []
    }
}, action) {
    switch (action.type) {
        case 'GET_CURRENT_FILTER' : {
            return state;
        }
        case 'SET_CURRENT_FILTER' : {
            return {...state, currentFilter:action.payload };
        }
        case 'CREATE_FILTER' : {

            return {...state, };
        }
        case 'CREATE_EVENT' : {
            let notification = {...state.notification};
            let filteredEvents;

            // Have filters
            if(state.list.length){
                state.list.forEach((filter) => {
                    filteredEvents = filterAll([action.payload], filter);
                    if(filteredEvents.length){
                        notification.haveMatch = true;
                        notification.filters = [...notification.filters, filter];
                    }
                });
            }

            return {...state, notification};
        }
        case 'SAVE_FILTER' : {

            let list = [...state.list, action.payload];

            return {...state, list}
        }
        case 'DISCARD_NOTIFICATION' : {
            return {...state, notification: action.payload}
        }
    }
    return state
}
