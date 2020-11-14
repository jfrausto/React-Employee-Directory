import React from "react";
import "../styles/Nav.css";

// this functional component contains and returns the search box
function Nav(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-collapse row" id="navbarNav">
        <div className="search-box">
          <form className="form-search">
            <input 
            className="form-control form-control-lg" 
            type="text" 
            placeholder="Search for an employee..."
            onChange={e => props.handleInputChange(e)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Nav;