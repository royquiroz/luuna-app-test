import React, { Component } from "react";

import { searchUsers } from "../../service";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ user: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.user);
    searchUsers(this.state.user).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>buscar</button>
      </div>
    );
  }
}

export default Users;
