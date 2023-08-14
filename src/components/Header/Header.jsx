import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    // State to manage the click event for the responsive menu
    const [click, setClick] = React.useState(false);

    // Function to handle the click event and toggle the menu
  const handleClick = () => setClick(!click);

  // Function to close the menu when a link is clicked
  const Close = () => setClick(false);

  return (
    <div className="nav">
      {/* Checkbox input for the responsive menu */}
      <input type="checkbox" id="nav-check" />

      {/* Header section containing the logo */}
      <div class="nav-header">
        {/* Link to the home page with the logo image */}
        <Link to="/">
          <img className="logo" src="../logo.png" />
        </Link>
      </div>

      {/* Responsive menu button */}
      <div class="nav-btn">
        {/* Label for the menu button */}
        <label for="nav-check">
          {/* Three spans creating the button icon */}
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>