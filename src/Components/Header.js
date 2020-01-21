import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

// class NavLink extends Component {
//   render() {
//     var { className, activeClassName, to, exact, ...rest } = this.props;
//     return <Link className={className} to={to} {...rest} />
//   }
// }

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Pawsome Adoption Agency</Navbar.Brand>
          <Nav className="mr-auto">
            <div className="navbar">
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
