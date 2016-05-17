import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from 'store';

// layouts
import App from 'layouts/app';

// components
import LoginContainer from 'ui/login-container';
import RegisterContainer from "ui/register-container";
import Homepage from "ui/homepage";
import NewJob from "ui/newJob";
import Update from "ui/update";
import JobView from "ui/jobView";
import History from "ui/jobhistory";
import NotFound from 'ui/notfound';



export default (

    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={LoginContainer} />
        <Route path="/home" component={Homepage} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/newJob" component={NewJob} />
        <Route path="/update" component={Update} />
        <Route path="/jobView" component={JobView} />
        <Route path="/history" component={History} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>

)
