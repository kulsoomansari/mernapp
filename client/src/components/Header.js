import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" className="header">
      <Navbar.Brand as={Link} to="/">
        MERN App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
         Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
         New Post
        </Nav.Link>
        {/* <Nav.Link as={Link} to="/signin">
         Signin
        </Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

export default Header;
