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