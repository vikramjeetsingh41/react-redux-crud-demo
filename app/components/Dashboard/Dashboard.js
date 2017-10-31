import React, { Component } from "react";
import List from "../List/List";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedUser": "vikram"
    };
    this.onChildChanged = this.onChildChanged.bind(this);
  }
  onChildChanged(newName) {
    this.setState({"selectedUser": newName});
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>dashboard Page</h1>
          <div>Selected user: {this.state.selectedUser}</div>
        </header>
        <List callbackParent={this.onChildChanged} />
      </div>
    );
  }
}
