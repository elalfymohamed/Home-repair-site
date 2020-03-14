/* eslint-disable import/no-cycle */

import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';


import NotFound from '../404/NotFound';


export default function Index() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={NotFound} status={404} />
                </Switch>
            </>
        </Router>
    );
}
