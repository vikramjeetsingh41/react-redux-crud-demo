import React, { Component } from "react";
import UserDetails from "./UserDetails";

export default class UsersPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { users, updateUser } = this.props;
    return (
      <div className="main-content leftBorderNone">
        <h1 className="innerHeader">Users Page</h1>
        <UserDetails id={this.props.id} users={users} updateUser={updateUser} />
      </div>
    );
  }
}




