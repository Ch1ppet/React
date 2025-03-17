import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import './style.scss';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    };

    handleForm = (e) => {
        e.preventDefault();
        if (this.state.value === '') {
            return null;
        };
        console.log(this.state.value);
    };

    handleSearch = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        
        return (
           <form action="#" className="search-form" onSubmit={this.handleForm}>
                <input 
                type="text"
                name="search" 
                id="search" 
                onChange={this.handleSearch} 
                className="search-form__input"
                value={this.state.value}/>
                <button className="search-form__btn" type="submit">SEARCH</button>
           </form>
        );
    };
};

root.render(<Form />);