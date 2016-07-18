import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

import Events from '../stores/Events';
import * as EventsAction from '../actions/EventsAction';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'moteefe',
            'events' : Events.getAll()
        };
    }

    componentWillMount() {
        Events.on('change', () => {
            this.setState({
                events: Events.getAll()
            });
        });
    }

    createEvent(){
        EventsAction.createEvent({
            id: Date.now(),
            location: 'Viana do Castelo',
            date: new Date(),
            topic: 'Fruta'
        });
    }

  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <Content events={this.state.events}/>
        <button onClick={this.createEvent.bind(this)}> Create </button>
        <Footer />
      </div>
    );
  }
}
