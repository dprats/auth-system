import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  // const url = 'http://localhost';
  // const url = 'https://vast-ravine-24080.herokuapp.com';
  // const port = 9000;
  // const backendUrl = `${url}:${port}`;
  const Auth = new AuthService();

  return class AuthWrapped extends Component {

    constructor() {
      super();
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
      }
      else {
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        }
        catch(err){
          Auth.logout()
          this.props.history.replace('/login')
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      }
      else {
        return null
      }
    }

  }
}
