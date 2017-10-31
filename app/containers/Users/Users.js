import React, { Component } from "react";
import Header from "./../../components/Common/Header";
import Footer from "./../../components/Common/Footer";
import SideBar from "./../../components/Common/SideBar";
import UsersPage from "./../../components/Users/UsersPage";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "selectedUser": "vikram"
    };
    this.onChildChanged = this.onChildChanged.bind(this);
    this.props.match.params.id
  }
  onChildChanged(newName) {
    this.setState({"selectedUser": newName});
  }
  render() {
    return (
      <div>
          <Header />
          <div className="contentBody">
            <div className="innerBody">
              <SideBar />
              <UsersPage id={this.props.match.params.id} />
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
