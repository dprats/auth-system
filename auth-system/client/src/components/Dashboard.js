import React, { Component } from 'react';
import AuthService from './AuthService';


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

        <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
      </div>
    );
  }
}

export default Dashboard;
