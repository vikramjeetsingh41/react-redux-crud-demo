import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTodo } from './../../redux/actions/actionTypes'

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar">
        <h2>Side Bar Component</h2>
      </div>
    );
  }
}

export default SideBar