import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Link to='/products'>To products</Link>
            </div>
        );
    };
};

export default Home;