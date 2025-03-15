import React, { Component } from "react";
import User from "./User.jsx";

class UserList extends Component {
    render() {
        return (
            <div>
                <button className="sort-btn"></button>

                <ul className="users">
                    {
                        this.props.users.map(user => (
                            <User key={user.id} {...user} />
                        ))
                    }
                </ul>
            </div>
        );
    };
};

export default UserList;