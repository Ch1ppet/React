import React, { Component } from "react";
import User from "./User.jsx";

class UserList extends Component {
    state = {
        sorting: null,
    }

    sortList = () => {
        const newSorting = this.state.sorting === 'asc'
            ? 'desc' 
            : 'asc'
        this.setState({
            sorting: newSorting,
        })
    };

    render() {
        let usersList;
        if (this.state.sorting) {
            usersList = this.props.users.slice().sort((a, b) => this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age);
        } else {
            usersList = this.props.users
        }
        return (
            <div>
                <button className="sort-btn" onClick={this.sortList}>
                    {this.state.sorting || "-"}
                </button>

                <ul className="users">
                    {usersList.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    };
};

export default UserList;