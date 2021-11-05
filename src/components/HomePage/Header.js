import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
          <NavLink className="navbar-brand font-weight-bold" to="/">
            React Redux
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/oantuti">
                  Game Oẳn tù tì
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/datvephim">
                  Đặt vé xem phim
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
