import React from "react";


export default class Event extends React.Component {
  render() {
    const {event} = this.props;

    return (
        <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">{event.topic}</h4>
            <p class="list-group-item-text">{event.location} </p>
            <p class="list-group-item-text">{event.date.start} </p>
        </a>
    );
  }
}
