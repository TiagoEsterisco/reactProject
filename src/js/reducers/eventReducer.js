import {filterAll} from '../aux/filter'

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

            list = filterAll(list, action.payload);

            if(list.length > 0){
                hasResults = true;
            }

            let filtered = {
                ...state.filtered,
                list,
                hasResults,
                isUserFiltering
            }

            return {...state, filtered};
        }
        case 'CLEAR_FILTER' : {
            let filtered = {
                ...state.filtered,
                list : state.list,
                hasResults : false,
                isUserFiltering : false
            }
            return {...state, filtered };
        }
        case 'CREATE_EVENT' : {

            let list = [...state.list, action.payload]
            return {...state, list}
        }
    }
    return state
}
