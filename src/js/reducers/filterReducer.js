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
            return {...state, currentFilter: action.payload };
        }
        case 'CREATE_FILTER' : {

            return {...state, };
        }
        case 'CREATE_EVENT' : {
            let notification = {...state.notification};

            if(state.currentFilter.location && state.currentFilter.location.toLowerCase() === action.payload.location.toLowerCase()){
                alert();
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
