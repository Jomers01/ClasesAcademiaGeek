import { 
    HashRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";
import React from 'react';
import Detalle from '../components/Detalle';
import TaskApp from "../components/TaskApp";

const AppRouters = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={TaskApp} />
                <Route exact path="/detalle/:id" component={Detalle} />
            </Switch>
            <Redirect to="/" />
        </Router>
    )
}

export default AppRouters

