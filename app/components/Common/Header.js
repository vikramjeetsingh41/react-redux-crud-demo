import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="subHeader">
        <h2>ReactJS Redux CRUD Demo</h2>
        {/* <ul>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/users/`}>Users</Link></li>
        </ul> */}
      </div>
      </div>
    );
  }
}
