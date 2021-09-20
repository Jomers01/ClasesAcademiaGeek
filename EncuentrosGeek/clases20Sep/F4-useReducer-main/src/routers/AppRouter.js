import React, { useState } from 'react';
import {
    HashRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import Counter from '../components/Counter';
import AuthRouter from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(true)
    return (
        <Router>
                    <Switch>
                        <PublicRouter path="/auth" component={AuthRouter} isAuthenticated={isAuth}  />
                        <PrivateRouter exact  path="/" component={Counter} isAuthenticated={isAuth} />

                        <Redirect to="/auth/login" />
                    </Switch>
        </Router>
    )
}

export default AppRouter
