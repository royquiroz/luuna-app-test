import React, { Component } from "react";
import { connect } from "react-redux";

import findRepositories from "../../redux/actions/findRepositories";

class Repositories extends Component {
  constructor() {
    super();
    this.state = {
      repository: ""
    };
  }

  handleChange = e => {
    this.setState({ repository: e.target.value });
  };

  handleClick = () => {
    this.props.findRepositories(this.state.repository);
  };

  render() {
    console.log(this.props.repositories);
    return (
      <div>
        Repositorios
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>buscar</button>
        <ul>
          {this.props.repositories.map((repo, i) => (
            <li key={i}>{repo.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { repositories: state.repositories };
};

const MapDispatchToProps = {
  findRepositories
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Repositories);
