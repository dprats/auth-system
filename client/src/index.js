import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
