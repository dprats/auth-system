import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Register';
import Users from './Users';
import Login from './Login';
import Dashboard from './Dashboard';

const Home = () => <h1>Home</h1>
// const Users = () => <h1>Users</h1>
// const SignUp = () => <h1>SignUp</h1>
// const Login = () => <h1>Login</h1>


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
);

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

export default App;
