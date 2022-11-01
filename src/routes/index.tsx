import React from 'react'
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function Routes() {
    return (
        <Switch>
            <Route exact path="/about">
                <h1>About</h1>
            </Route>
            <Route exact path="/users">
                <h1>Users</h1>
            </Route>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
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