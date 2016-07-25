export default function reducer(state={
    list: [],
    filtered : {
        list: [],
        hasResults: false
    }
}, action) {
    switch (action.type) {

        case 'FETCH_EVENTS': {
            return {...state, list : action.payload}
        };
        case 'FILTER_EVENT_BY_LOCATION' : {

            let hasResults = false;
            let list = state.list.filter((event) => {
                return event.location.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0;
            });

            if(list.length > 0){
                hasResults = true;
            }

            let filtered = {
                list,
                hasResults
            }

            return {...state, filtered }
        }
        case 'CREATE_EVENT' : {

            let list = [...state.list, action.payload]
            return {...state, list}
        }
    }
    return state
}
