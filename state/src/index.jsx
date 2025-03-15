import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Avatar from './avatar.jsx';
import './style.css';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    loggedIn = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    loggedOut = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const button = this.state.isLoggedIn
            ? <button className="btn" onClick={this.loggedOut}>Log Out</button> 
            : <button className="btn" onClick={this.loggedIn}>Log IN </button>
            
        const greeting = this.state.isLoggedIn
            ? <div className="log-wrapper__name">{`Hi, ${this.props.name}`}
            </div>
            : <div className="log-wrapper__name">Hi, stranger</div>

        return (
            <div className="log-wrapper">
                <div>
                    {greeting}
                </div>
                {button}
            </div>
        );
    };
};

root.render(<Counter name='Tom'/>);