import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import update from 'react-addons-update';
import {connect} from 'react-redux';
import * as userActions from './../../redux/actions/userActions';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    let data = this.getUser();
    this.state = {
      "selectedUser": data,
      "redirectToReferrer": false
    };
    this.updateUser = this.updateUser.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  getUser() {
    let id = this.props.id;
    let isFound = false;
    let returnValue = "";
    let data = this.props.users.reduce(function(initialValue, value) {
      if (value.id == id && !isFound) {
        returnValue = value;
        isFound = true;
      }
    }, 0);
    return returnValue;
  }
  componentDidMount() {
    
  }
  updateInputValue(evt) {
    console.log(evt.target.value);
    let updatedUser = Object.assign({}, this.state.selectedUser, {
      name: evt.target.value
    });
    this.setState({
      selectedUser: updatedUser
    });
  }
  updateUser(e) {
    e.preventDefault();
    let updated = this.props.updateUser(this.state.selectedUser);
    if (updated.user.id) {
      this.setState({ redirectToReferrer: true });
    }
  }
  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return (
        <Redirect to={"/"} />
      );
    }
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-1-3 txtAlignL"><Link to="/">Back</Link></div>
          <div className="pure-u-2-3"><h2 id="heading">User Details Component</h2></div>
        </div>
        <div className="pure-g mTop50">
          <div className="pure-u-1-3">
            Name
          </div>
          <div className="pure-u-1-3">
            <input type="text" name="username" value={this.state.selectedUser.name} onChange={this.updateInputValue} />
          </div>
          <div className="pure-u-1-3">
            <input type="button" value="Update User" className="btn" onClick={this.updateUser} />
            </div>
      </div>
      </div>
    );
  }
}