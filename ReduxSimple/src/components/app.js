import React, { Component } from 'react';
import TodoList from './playground/todo-list';

export default class App extends Component {
  render() {
    return (
      <div className="react-app-content">
        <div>React simple starter</div>
        <TodoList />
      </div>
    );
  }
}
