export default function reducer(state={
    list: [],
    currentFilter: {},
    notification: {
        haveMatch: false,
        filter: {}
    }
}, action) {
    switch (action.type) {
        case 'SET_CURRENT_FILTER' : {
            let currentFilter = {
                location : action.payload
            }
            return {...state, currentFilter };
        }
        case 'CREATE_FILTER' : {
            return state;
        }
        case 'CREATE_EVENT' : {
            let notification = {...state.notification};

            if(state.currentFilter.location.toLowerCase && action.payload.location.toLowerCase){
                notification.filter = {location: state.currentFilter};
                notification.haveMatch = true;
            }

            return {...state, notification};
        }
        case 'DISCARD_NOTIFICATION' : {
            return {...state, notification: action.payload}
        }
    }
    return state
}
