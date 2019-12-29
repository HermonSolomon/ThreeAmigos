import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  closeMenu() {
    this.setState({ isExpanded: false });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <header id={"header"}>
        <NavLink to="/" className="logo">
          <img src="/img/logo.pngg" alt="" />
        </NavLink>
        {/* Menu Icon /> */}
        <div className="menu-icon">
          <i onClick={e => this.handleToggle(e)} className={"fas fa-bars"} />
        </div>
        <NavLink to="/cart" className="shopping-cart ml-auto">
          <span className="mr-2">
            <i className="fas fa-shopping-cart"> </i>{" "}
          </span>{" "}
        </NavLink>
        {/* Navigation*/}
        <div className={`menu collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <nav className={"cl-effect-14"}>
            <NavLink onClick={e => this.closeMenu(e)} to="/">
              Home
            </NavLink>
            <NavLink onClick={e => this.closeMenu(e)} to="./ProductList">
              Products
            </NavLink>
            <NavLink onClick={e => this.closeMenu(e)} to="./BlogList">
              Blog
            </NavLink>
            <NavLink onClick={e => this.closeMenu(e)} to="./About">
              About
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;
