import React, { Component } from "react";
import SearchBar from "./Searchbar";
import './NavBar.css';

 
class NavBar extends Component {
  render() {
    return (
      <div className = "rowC">
        <nav className = "navbar navbar-dark bg-dark mb-3">
        <SearchBar />
        <div className="divider" />
        <button> <b>Filter </b></button>
        </nav>
        </div>
    );
  }
}
export default NavBar;