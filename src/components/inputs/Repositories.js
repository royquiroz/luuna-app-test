import React, { Component } from "react";

import { searchRepositories } from "../../service";

class Repositories extends Component {
  constructor() {
    super();
    this.state = {
      repository: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ repository: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.repository);
    searchRepositories(this.state.repository).then(data => {
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

export default Repositories;
