import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Settings from "../pages/settings/settings";

export default function RouteWrapper() {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/play' component={Settings} />
        </Switch>

    )
}