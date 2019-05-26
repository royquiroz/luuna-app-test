import React, { Component } from "react";
import { connect } from "react-redux";
import findUsers from "../../redux/actions/findUsers";
import Card from "../Cards/UserCard";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = e => {
    this.setState({ user: e.target.value });
  };

  handleClick = () => {
    this.props.findUsers(this.state.user);
  };

  handlePress = e => {
    if (e.keyCode === 13) {
      this.props.findUsers(this.state.user);
    }
  };

  render() {
    const isEmpty = this.props.users.length === 0;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2">
            <div className="input-group mb-3 search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de Usuario"
                aria-label="Nombre de Usuario"
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
              {this.props.users.map((user, i) => (
                <Card key={i} user={user} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const MapDispatchToProps = {
  findUsers
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Users);
