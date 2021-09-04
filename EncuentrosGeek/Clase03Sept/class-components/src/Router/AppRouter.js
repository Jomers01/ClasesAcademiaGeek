import React, { Component } from 'react';
import Registro from '../Components/Registro';
import AppContainer from '../Containers/AppContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/registro" exact component={Registro} />
                    <Route path="/" exact component={AppContainer} />
                </Switch>
            </Router>
        )
    }
}
