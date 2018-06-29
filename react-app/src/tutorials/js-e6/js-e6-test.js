import React, { Component } from 'react';

class User {
    constructor(id, mail, name) {
        this.id = id;
        this.mail = mail;
        this.name = name;
    }

    toString() {
        return `User{id=${this.id}, mail=${this.mail}, name=${this.name}}`;
    }
}

export default class JsE6Test extends Component {
    constructor(props) {
        super(props);

        let defaultUser = new User(0, 'user@server.org', 'John Doe');
        let currentUser = Object.setPrototypeOf({...defaultUser}, User.prototype);
        currentUser.name = 'Jane Doe';

        this.state = {
            defaultUser: defaultUser,
            currentUser: currentUser,
        }
    }

    render() {
        return (
            <div className="tutorial">
                <h3>Js E6 Test</h3>
                <div className="user">
                    Default: {this.state.defaultUser.toString()}
                </div>
                <div className="user">
                    Default: {this.state.currentUser.toString()}
                </div>
            </div>
        );
    }
}