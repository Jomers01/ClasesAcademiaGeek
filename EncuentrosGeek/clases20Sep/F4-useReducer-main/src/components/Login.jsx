import React, { memo, useContext, useReducer } from 'react';
import { authReducer, initialState } from '../reducers/authReducer';
import { login } from '../actions/authAction';
import { UserContext } from './UserContext';

export const Login = memo(() => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const { setIsAuth } = useContext(UserContext)

    const logIn = ()=> {
        console.log(state);
        dispatch(login('12345', 'Silvia Garcia'))
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={logIn}
            >
                Login
            </button>
        </div>
    )
})