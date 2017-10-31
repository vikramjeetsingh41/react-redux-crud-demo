import React, { Component } from "react";
import Header from "./../../components/Common/Header";
import Footer from "./../../components/Common/Footer";
import SideBar from "./../../components/Common/SideBar";
import HomePage from "./../../components/HomePages/HomePage";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as userActions from './../../redux/actions/userActions';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      "isRedirect": false
    };
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }
  redirectToLogin() {
    this.setState({ isRedirect: true });
  }
  
  render() {
    const { isRedirect, isEditRedirect } = this.state;
    const { usersState, createUser, deleteUser } = this.props;
    if (isRedirect) {
      return (
        <Redirect to={"/login"} />
      );
    }
    return (
        <div>
          <Header />
          <div className="contentBody">
            <div className="innerBody">
              <SideBar />
              <HomePage users={usersState} createUser={createUser} deleteUser={deleteUser} />
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    usersState: state.users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(userActions.createUser(user)),
    deleteUser: id => dispatch(userActions.deleteUser(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
