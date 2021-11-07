import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, LoginPage, RegisterPage } from './index';

const Router = () => (
    <Switch>
        <Route exact path = "/landing" component={LandingPage} />
        <Route exact path ="/login" component ={LoginPage}/>
        <Route exact path = "/register" component={RegisterPage} />
    </Switch>
);

export default Router;