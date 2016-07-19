import React from "react";

import Title from "./Header/Title";
import FilterList from "./Header/FilterList";

export default class Header extends React.Component {

  render() {
    return (
      <div class="navbar navbar-default">
        <div class="container">
            <Title title={this.props.title} />
            <FilterList filters={this.props.filters}/>
        </div>
      </div>
    );
  }
}
