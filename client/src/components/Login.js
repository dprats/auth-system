import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './Login.css';
import AuthService from './AuthService';

class Login extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  handleFormSubmit(e){
    e.preventDefault();

    this.Auth.login(this.state.username,this.state.password)
      .then(res =>{
        this.props.history.replace('/dashboard');
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          alert(err.response.data.error);
        } else {
          alert(err);
        }
      })
  }

  //Add redirection if we are already loggedIn
  componentWillMount(){
    if(this.Auth.loggedIn()) {
      console.log('User is logged in...');
      this.props.history.replace('/dashboard');
    }
  }

  render() {
    return (
      <div className="center-login">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
              required />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
              required />
            <input
              className="form-submit-login"
              value="SUBMIT"
              type="submit"
            />
          </form>
          <br/>
          <br/>
          <a href="/signup">Sign up</a>
        </div>

      </div>
    );
  }

  handleChange(e){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}

export default Login;
