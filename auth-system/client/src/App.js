import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth.js';
import { Link } from 'react-router-dom';

const Auth = new AuthService();


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogout(){
    Auth.logout();
    this.props.history.replace('/login');
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome {this.props.user.username}</h2>
          </div>
        <p className="App">
          { isLoggedIn ? (
              <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
        </p>
      </div>
    );
  }
}

export default withAuth(App);
