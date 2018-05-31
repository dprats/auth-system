import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './SignUp.css';
import AuthService from './AuthService';


class SignUp extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  handleFormSubmit(e){
    e.preventDefault();

    // this.Auth.login(this.state.username,this.state.password)
    //   .then(res =>{
    //     this.props.history.replace('/');
    //   })
    //   .catch(err =>{
    //     alert(err);
    //   })

    this.Auth.signup(this.state.username, this.state.email, this.state.password)
      .then(res =>{
        this.props.history.replace('/dashboard');
      })
      .catch(err =>{
        alert(err);
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
      <div className="center">
        <div className="card">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />

            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
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

export default SignUp;
