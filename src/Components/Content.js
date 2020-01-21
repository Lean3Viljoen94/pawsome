import React, { Component } from 'react';

import { Route } from "react-router-dom";

import DogCards from "./DogCards";
 
// This component handles the routing for the links & renders the components accordingly

class Content extends Component {
    render() {
        return (
            <div>
                <Route exact={true} path="/" component={DogCards} />
            </div>
        );
    }
};

export default Content;