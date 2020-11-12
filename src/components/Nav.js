import React from "react";
import "../styles/Nav.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <div className="search-box">
          <form className="form-inline">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => props.handleInputChange(e)}
            />
          </form>
        </div>
      </div>
      
    </nav>
  );
}
export default Nav;