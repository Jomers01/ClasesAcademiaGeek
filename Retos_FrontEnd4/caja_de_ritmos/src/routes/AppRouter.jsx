import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Caja from '../containers/Caja'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Caja} />
            </Switch>
            <Redirect to="/" />    
        </Router>
    )
}

export default AppRouter
