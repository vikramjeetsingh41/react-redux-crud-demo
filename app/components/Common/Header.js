import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="subHeader">
        <h2>ReactJS Redux CRUD Demo (Header Component)</h2>
      </div>
      </div>
    );
  }
}
