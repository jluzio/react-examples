import React, { Component } from 'react';

export default class TodoItemComponent extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {info: props.info};
    }

    render() {
        return (
            <li class="todo-item">{this.state.info}</li>
        );
    }
}
