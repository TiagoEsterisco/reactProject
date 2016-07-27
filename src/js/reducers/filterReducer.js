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
        case 'SET_FILTER' : {
            let filterId = action.payload;

            let currentFilter = state.list.filter((filter) => {
                return filter.id == filterId;
            });

            return {...state, currentFilter: currentFilter[0]};
        }
        case 'GET_CURRENT_FILTER' : {
            return state;
        }
        case 'SET_CURRENT_FILTER' : {
            let currentFilter = state.currentFilter;
            let mergeFilter = Object.assign(currentFilter, action.payload);

            return {...state, currentFilter:mergeFilter };
        }
        case 'CLEAR_FILTER' : {
            let currentFilter = action.payload;
            return {...state, currentFilter };
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

            let list = [];

            if(state.currentFilter.id){

                var filterIndex;
                state.list.forEach((filter, index)=>{
                    if(filter.id == state.currentFilter.id){
                        filterIndex =  index;
                    }
                });

                if(filterIndex){
                    let filterList = [...state.list];
                    filterList[filterIndex] = state.currentFilter;
                    list = filterList;
                } else {
                    list = [...state.list, state.currentFilter];
                }
            }

            return {...state, list}
        }
        case 'DISCARD_NOTIFICATION' : {
            return {...state, notification: action.payload}
        }
    }
    return state
}
