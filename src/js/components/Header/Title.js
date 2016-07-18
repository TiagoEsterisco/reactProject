import React from "react";


export default class Title extends React.Component {
  render() {
    return (
        <div class="navbar-header">
            <h1 class="navbar-brand">{this.props.title}</h1>
        </div>
    );
  }
}
