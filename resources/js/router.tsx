import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { currentRoute } from './core';
import {AuthRoute, PublicRoute, UserProfile} from "./shared";
import {Dashboard} from "./pages";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";


const Router = () => {
    return (
        <Switch>
            <AuthRoute
                component={Dashboard}
                path={currentRoute('home').path}
                exact={true}
            />
            <AuthRoute
                component={UserProfile}
                path={currentRoute('profile').path}
                exact={true}
            />
            <PublicRoute
                component={Login}
                path={currentRoute('login').path}
                exact={true}
            />
            <PublicRoute
                component={Register}
                path={currentRoute('register').path}
                exact={true}
            />
            <PublicRoute
                component={ForgotPassword}
                path={currentRoute('forgot-password').path}
                exact={true}
            />
            <PublicRoute
                component={ResetPassword}
                path={currentRoute('reset-password').path}
            />
            <Redirect to={currentRoute('home').path} />
        </Switch>
    );
};

export default Router;
