import React, { Component } from "react";
import UserDetails from "./UserDetails";

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.onChildChanged = this.onChildChanged.bind(this);
  }
  onChildChanged(newName) {
    this.setState({"selectedUser": newName});
  }
  render() {
    return (
      <div className="main-content leftBorderNone">
        <h1 className="innerHeader">Users Page</h1>
        <UserDetails id={this.props.id} callbackParent={this.onChildChanged} />
      </div>
    );
  }
}




