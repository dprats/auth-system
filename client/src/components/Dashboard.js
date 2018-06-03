import React, { Component } from 'react';
import AuthService from './AuthService';
const Auth = new AuthService();

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.Auth = new AuthService();
    this.state = {
      user: {},
      dummy: 'value',
      users: []
    }
  }

  handleLogout(){
    console.log('User logging out from /dashboard');
    Auth.logout();
    this.props.history.replace('/login');
  }

  componentDidMount() {
    const profile = this.Auth.getProfile();
    this.setState({
      user: profile,
    });

    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div >
        <h1>Dashboard</h1>
        <p>Welcome, {this.state.user.username}!</p>
        <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>

        <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
      </div>
    );
  }
}

export default Dashboard;
