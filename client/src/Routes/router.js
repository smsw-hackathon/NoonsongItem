import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage, LoginPage, RegisterPage,CreatePage } from './index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/landing" component={LandingPage} />
            <Route exact path ="/" component ={LoginPage}/>
            <Route exact path = "/register" component={RegisterPage} />

        </Switch>
    </BrowserRouter>
    
);
export default Router;