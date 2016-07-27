import React from "react";


export default class Event extends React.Component {
  render() {
    const {event} = this.props;


    return (<li class="list-group-item">
                <h5><b>Location: </b>{event.location}</h5>
                <h6><b>When: </b>{event.date} <b>At</b> {event.startTime}</h6>
                <h6><b>Topics: </b>{event.topics.toString()}</h6>
            </li>);
  }
}
