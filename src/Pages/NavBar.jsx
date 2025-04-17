import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/">
          <img src="" className="nav-logo" alt="Book Buddy logo"></img>
        </NavLink>
        <NavLink to="/user/me" className="nav-links">
          My Account
        </NavLink>
        <NavLink to="/login" className="nav-links">
          Login
        </NavLink>
        <NavLink to="/register" className="nav-links">
          Register
        </NavLink>
      </nav>
    </div>
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
