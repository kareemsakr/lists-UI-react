import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <Link className="navbar-brand" to="/lists">
          List.lists
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/lists" className="nav-link">
              Main List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/test" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
