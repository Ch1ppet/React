import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
    render() {
      return (
            <div className="page-not-found">
                <div className="page-not-found__error">
                    404 Page Not Found
                </div>
            </div>
        ); 
    };
};

export default PageNotFound;