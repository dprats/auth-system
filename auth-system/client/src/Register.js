import React, { Component } from 'react';

class Register extends Component {
  // state = {users: []}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      <div >
        <div class="container row">
          <div class="jumbotron col-sm-4 pull-center">
            <form action="/signup" method="post">
              <div>
                <label>Username:</label>
                <input type="text" name="username"/>
              </div>
              <div>
                <label>Email:</label>
                <input type="text" name="email"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password"/>
              </div>
              <div>
                <input class="btn btn-primary" type="submit" value="Sign Up"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
