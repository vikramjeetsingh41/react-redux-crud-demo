import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTodo } from './../../redux/actions/actionTypes'

class SideBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.updatevalue = this.updatevalue.bind(this);
  }
  updatevalue() {
    console.log("update value clicked");
    this.props.dispatch(addTodo("new value"));
    this.props.dispatch(addTodo("new value 3"));
    console.log(this.props.st.getState());
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