import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import update from 'react-addons-update';

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

export default class List extends Component {
  constructor(props) {
    super();
    this.state = {
      "data": [{ "id": 1, "name": "vikram" }],
      "redirectToReferrer": false
    };
    this.addList = this.addList.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
    //this.setState({ redirectToReferrer: true });
  }
  addList(e) {
    e.preventDefault();
    let count = this.state.data.length;
    let newId = count + 1;
    let newElem = { "id": newId, "name": newId + " roni"};
    let updatedList = this.state.data.concat(newElem);
    this.setState({ data: updatedList });
  }
  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return (
        <Redirect to={"/dashboard/2"} />
      );
    }
    return (
      <div>
        <h2 id="heading">List Items</h2>
        <input type="button" value="ADD" onClick={this.addList} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
          edit={this.handleEdit.bind(this)}
        />
      </div>
    );
  }
}
