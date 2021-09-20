import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Detalle from '../components/Detalle'
import NavBar from '../components/NavBar'
import ListContainer from '../containers/ListContainer'

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/detalle/:id" component={Detalle} />
                    <Route exact path="/" component={ListContainer} />
                </Switch>
            </Router>
        )
    }
}
