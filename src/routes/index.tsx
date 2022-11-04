import React from 'react'
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Demo } from '../pages';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Demo} />
            <Route exact path="/page-not-found">
                <h1>Page not found</h1>
            </Route>
            <Route>
                <Redirect to="/page-not-found" />
            </Route>
        </Switch>
    )
}

export default Routes