import React, { Component } from "react";
import { connect } from "react-redux";
import findRepositories from "../../redux/actions/findRepositories";
import Card from "../Cards/RepoCard";

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

  handlePress = e => {
    if (e.keyCode === 13) {
      this.props.findRepositories(this.state.repository);
    }
  };

  render() {
    const isEmpty = this.props.repositories.length === 0;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2">
            <div className="input-group mb-3 search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Repositorio"
                aria-label="Repositorio"
                aria-describedby="button-addon2"
                onChange={this.handleChange}
                onKeyDown={this.handlePress}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.handleClick}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isEmpty ? (
          <h1 className="display-4 text-center">
            <strong>No existen resultados</strong>
          </h1>
        ) : (
          <div className="cards-container">
            <div className="card-columns">
              {this.props.repositories.map((repo, i) => (
                <Card key={i} repo={repo} />
              ))}
            </div>
          </div>
        )}
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
