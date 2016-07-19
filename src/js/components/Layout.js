import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import Events from '../stores/Events';
import Filters from '../stores/Filters';
import * as EventsAction from '../actions/EventsAction';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'moteefe',
            'events' : Events.getAll(),
            'filters' : Filters.getAll(),
            selectedFilter : Filters.filterLoaded()
        };
    }

    matchedEvent(){
        console.log('matchedEvent');
    }

    componentWillMount() {
        Events.on('change', () => {
            this.setState({
                events: Events.getAll()
            });
        });

        Filters.on('change', () => {
            this.setState({
                filters: Filters.getAll(),
                selectedFilter: Filters.filterLoaded(),
            });
        });
    }

    //Demo purpose
    createEvent(){
        EventsAction.createEvent({
            id: 6,
            location: 'Bond Street',
            date: {
                start: new Date().toString()
            },
            topic: 'Google How to'
        });
    }

  render() {
    return (
      <div>
        <Header title={this.state.title} filters={this.state.filters}/>
        <Content events={this.state.events} selectedFilter={this.state.selectedFilter}/>

        <div class="container">
            <div class="col-sm-12">
                <button class="btn btn-default"onClick={this.createEvent.bind(this)}> Create demo event </button>
            </div>
        </div>

        <Footer />
      </div>
    );
  }
}
