import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: "false"
    };
  }

  showMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="margin-icon">
          <i className="fab fa-github fa-2x" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.showMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            this.state.show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="navbarToggler"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/repositories">
                Repositorios
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
