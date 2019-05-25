import React, { Component } from "react";
import { connect } from "react-redux";
import findUsers from "../../redux/actions/findUsers";

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

  render() {
    console.log(this.props.users);

    return (
      <div>
        Usuarios
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>buscar</button>
        <ul>
          {this.props.users.map((user, i) => (
            <li key={i}>{user.login}</li>
          ))}
        </ul>
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
