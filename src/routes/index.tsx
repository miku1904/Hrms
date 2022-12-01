import React from 'react'
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Demo } from '../pages';
import Login from '../pages/login/Login';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    )
}

export default Routes