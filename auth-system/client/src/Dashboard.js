import React, { Component } from 'react';

class Dashboard extends Component {
  // state = {users: []}

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div >
        <h1>Dashboard</h1>
        {/*<div class="container row">*/}
          {/*<div class="jumbotron col-sm-4 pull-center">*/}
            {/*<form action="/login" method="post">*/}
              {/*<div>*/}
                {/*<label>Username:</label>*/}
                {/*<input type="text" name="username"/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<label>Password:</label>*/}
                {/*<input type="password" name="password"/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<input class="btn btn-primary" type="submit" value="Login"/>*/}
              {/*</div>*/}
            {/*</form>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Dashboard;
