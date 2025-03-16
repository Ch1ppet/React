import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import './style.scss';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    };

    componentDidMount() {
        this.getUserInfo(this.props.name);
    };

    getUserInfo = (userId) => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data,
                });
            });
    };

    render() {
        const { user } = this.state;
        if (!user) {
            return null;
        };    
        
        return (
            <div className="user-info">
                <div className="user-info__top">
                    <img className="user-info__img" src={this.state.user.avatar_url} alt={this.props.name} />
                </div>
                <div className="user-info__bottom">
                    <span className="user-info__name">{this.state.user.name}</span>
                    <span className="user-info__location">{this.state.user.location}</span>
                </div>
            </div>
        );
    };
};

root.render(<UserInfo name='facebook'/>);