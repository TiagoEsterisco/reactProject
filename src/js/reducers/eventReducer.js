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

            // AJAX CALL
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

            return {...state, list : eventsList}
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
