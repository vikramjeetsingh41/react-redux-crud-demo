import React, { Component } from "react";
import Header from "./../../components/Common/Header";
import Footer from "./../../components/Common/Footer";
import SideBar from "./../../components/Common/SideBar";
import UsersPage from "./../../components/Users/UsersPage";
import {connect} from 'react-redux';
import * as userActions from './../../redux/actions/userActions';

class Users extends Component {
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
    const { users, updateUser } = this.props;
    return (
      <div>
          <Header />
          <div className="contentBody">
            <div className="innerBody">
              <SideBar />
              <UsersPage id={this.props.match.params.id} users={users} updateUser={updateUser} />
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateUser: user => dispatch(userActions.updateUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
