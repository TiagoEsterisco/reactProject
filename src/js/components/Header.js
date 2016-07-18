import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

  render() {
    return (
      <div class="navbar navbar-default">
        <div class="container">
            <Title title={this.props.title} />
        </div>
      </div>
    );
  }
}
