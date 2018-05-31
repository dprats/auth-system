import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth.js';
const Auth = new AuthService();



// import Register from './components/Register';
// import Users from './components/Users';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

class App extends Component {

  handleLogout(){
    Auth.logout();
    this.props.history.replace('/login');
  }


  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome {this.props.user.username}</h2>
          </div>
        <p className="App">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);

// class App extends Component {
//   state = {users: []}
//
//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Users</h1>
//         {this.state.users.map(user =>
//           <div key={user.id}>{user.username}</div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
