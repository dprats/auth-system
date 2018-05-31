import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Login from './components/Login.js';
import Signup from './components/SignUp.js';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>

    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
