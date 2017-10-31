import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import update from 'react-addons-update';
import {connect} from 'react-redux';
import * as userActions from './../../redux/actions/userActions';

const Button = ({title, method, index}) => {
  return (
    <input type="button" value={title} onClick={() => {method(index)}} />
  );
}

const Todo = ({todo, index, remove, edit}) => {
  // Each Todo
  return (
    <li>{todo.name} 
      <Button title="Remove" method={remove} index={index} />
      <Button title="Edit" method={edit} index={index} />
    </li>
  );
}

const TodoList = ({todos, remove, edit}) => {
  // Map through the todos
  const todoNode = todos.map((todo, index) => {
    return (<Todo todo={todo} key={todo.id} index={index} remove={remove} edit={edit} />)
  });
  return (<ul>{todoNode}</ul>);
}

class UserDetails extends Component {
  constructor(props) {
    super(props);
    let data = this.getUser();
    this.state = {
      "selectedUser": data,
      "redirectToReferrer": false
    };
    this.addList = this.addList.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  getUser() {
    let id = this.props.id;
    let data = this.props.users.reduce(function(initialValue, value) {
      if (value.id == id) {
        return value;
      }
      return 0;
    }, 0);
    return data;
  }
  componentDidMount() {
    
  }
  handleRemove(index) {
    this.setState({
      data: update(this.state.data, {$splice: [[index, 1]]})
    });
  }
  handleEdit(index) {
    let data = this.state.data[index];
    this.props.callbackParent(data.name);
  }
  addList(e) {
    e.preventDefault();
    let count = this.state.data.length;
    let newId = count + 1;
    let newElem = { "id": newId, "name": newId + " roni"};
    let updatedList = this.state.data.concat(newElem);
    this.setState({ data: updatedList });
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
        <h2 id="heading">User Details</h2>
        <input type="text" name="username" value={this.state.selectedUser.name} onChange={this.updateInputValue} />
        <input type="button" value="Update User" onClick={this.updateUser} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);