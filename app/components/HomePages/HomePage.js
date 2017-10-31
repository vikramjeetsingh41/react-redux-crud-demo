import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const User = ({user, index, edit, deleteUser}) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td><a href="javascript: void(0)" onClick={() => edit(user.id)}>Edit</a></td>
      <td><a href="javascript: void(0)" onClick={() => deleteUser(user.id)}>Delete</a></td>
    </tr>
  );
}

const UsersList = ({users, edit, deleteUser}) => {
  let userList = users.map((user, index) => {
    return (<User user={user} key={user.id} index={index} edit={edit} deleteUser={deleteUser} />)
  });
  if (userList == "") {
    userList = <tr><td colSpan="4" className="noRecordsFound">No records found</td></tr>;
  }
  return (<table className="table"><tbody><tr><th>S.No.</th><th>Name</th><th>Actions</th></tr>{userList}</tbody></table>);
}

export default class HomePage extends Component {
  constructor(props) {
    super();
    this.state = {
      "isEditRedirect": false,
      "editUserId": 0
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onSave = this.onSave.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getMaxId = this.getMaxId.bind(this);
  }
  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  generateName() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  getMaxId() {
    return this.props.users.reduce(function(initialValue, value) {
      if (value.id > initialValue) {
        return value.id + 1;
      }
      return value.id + 1;
    }, 0);
  }
  onSave() {
    let id = 1;
    let usersLen = this.props.users.length;
    if (usersLen > 0) {
      id = this.getMaxId();
    }
    this.props.createUser({"id": id, "name": this.generateName()});
  }
  editUser(id) {
    this.setState({ editUserId: id});
    this.setState({ isEditRedirect: true });
  }
  deleteUser(id) {
    this.props.deleteUser(id);
  }
  render() {
    const { isRedirect, isEditRedirect } = this.state;
    if (isEditRedirect) {
      return (
        <Redirect to={"/users/"+ this.state.editUserId} />
      );
    }
    return (
        <div className="main-content leftBorderNone">
          <div>Home page component</div>
          <div className="tableListing">
            <span>Users Listing</span>
            <input type="button" className="btn" onClick={this.onSave} value="Add User" />
            <UsersList users={this.props.users} edit={this.editUser} deleteUser={this.deleteUser} />
          </div>
        </div>
    );
  }
}
