import React from "react";

// Components
import Event from "./Content/Event";
import Filter from "./Content/Filter";


export default class Content extends React.Component {

    render() {
        const Events = this.props.events.map( (event) => {
            return <Event key={event.id} event={event}/>
        });

        return (
          <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h5>Events:</h5>
                    <ul class="list-group col-sm-8"> {Events} </ul>
                    <Filter selectedFilter={this.props.selectedFilter}/>
                </div>
            </div>
          </div>
        );
    }
}
