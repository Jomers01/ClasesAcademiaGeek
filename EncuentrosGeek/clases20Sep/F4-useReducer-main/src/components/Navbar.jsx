import React, { useContext, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authAction'
import { initialState, authReducer } from '../reducers/authReducer'
import { UserContext } from './UserContext'

const Navbar = () => {
    const { setIsAuth } = useContext(UserContext)
    const [state, dispatch] = useReducer(authReducer, initialState)

    const logOut = ()=> {
        console.log(state);
        dispatch(logout())
        setIsAuth(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">UseReduce</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/" activeClassName="selected">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Login" activeClassName="selected">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="selected">Counter</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-success" type="submit" onClick={logOut}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
