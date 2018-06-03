import React, { Component } from 'react';

// class Users extends Component {
//   // state = {users: []}
//
//   // componentDidMount() {
//   //   fetch('/users')
//   //     .then(res => res.json())
//   //     .then(users => this.setState({ users }));
//   // }
//
//   render() {
//     return (
//       <div >
//         <div class="container row">
//           <div class="jumbotron col-sm-4 pull-center">
//             <form action="/signup" method="post">
//               <div>
//                 <label>Username:</label>
//                 <input type="text" name="username"/>
//               </div>
//               <div>
//                 <label>Email:</label>
//                 <input type="text" name="email"/>
//               </div>
//               <div>
//                 <label>Password:</label>
//                 <input type="password" name="password"/>
//               </div>
//               <div>
//                 <input class="btn btn-primary" type="submit" value="Sign Up"/>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

class Users extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username} ({user.email})</div>
        )}
      </div>
    );
  }
}

export default Users;
