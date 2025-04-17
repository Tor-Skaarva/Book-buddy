import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <img
          src="./src/assets/Tor-Block30Logo2.png"
          className="nav-logo"
          alt="Book Buddy logo"
        ></img>
      </NavLink>
      <div className="nav-links-container">
        <NavLink to="/">All Books</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/user/me">My Account</NavLink>
      </div>
    </nav>
  );
}

{
  /* <div>
<Container>
<Navbar expand="lg" bg="light" variant="light">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <Link className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/books">
        Books
      </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/user/me">
        Account
      </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </li>
    <li className="nav-item active">
      <Link className="nav-link" to="/register">
        Register
      </Link>
    </li>
  </ul>
</Navbar>
</Container>
</div> */
}
