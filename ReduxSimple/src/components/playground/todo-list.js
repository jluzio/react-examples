import React, { Component } from 'react';
import TodoItem from './todo-item';

export default class TodoListComponent extends Component {
    render() {
        return (
            <div className="todo-list">
                <span>TodoList:</span>
                <ul className="todo-list">
                    <TodoItem info="todo1"></TodoItem>
                    <TodoItem info="todo2"></TodoItem>
                    <TodoItem info="todo3"></TodoItem>
                </ul>
            </div>
        );
    }
}
