/* eslint-disable import/no-cycle */

import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';

import Projects from '../projects/Projects';


export default function Index() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </>
        </Router>
    );
}
