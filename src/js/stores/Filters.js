import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class Filter extends EventEmitter {
    constructor() {
        super();
        this.filters = [{
            id: 1,
            name: 'JavaScript',
            location: 'Bond Street',
            topic: 'javascript',
            date: {
                from : new Date().toString(),
                to: 'Tue Jul 19 2017 02:50:54 GMT+0100 (BST)'
            }
        }];

        // DEMO ONLY
        this.filterSelected = {
            topic: '',
            location: '',
            date: {
                from: '',
                to: ''
            },
            name: ''
        };
    }

    getAll(){
        return this.filters;
    }

    createFilter(filter) {
        filter.id = Date.now();
        this.filters.push(filter);
        this.emit('change');
    }

    loadFilter(filterId) {
        this.filterSelected = this.filters.map((filter) =>{
            return filter.id == filterId ? filter : false;
        })[0];

        this.emit('change');
    }

    filterLoaded(){
        return this.filterSelected;
    }


    handleAction(action) {
        switch(action.type) {
            case 'CREATE_FILTER': {
                this.createFilter(action.filter);
                break;
            }
            case 'LOAD_FILTER': {
                this.loadFilter(action.filterId);
                break;
            }
        }
    }
}

const filter = new Filter;
dispatcher.register(filter.handleAction.bind(filter));
export default filter;
