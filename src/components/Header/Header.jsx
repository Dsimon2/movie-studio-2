import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    // State to manage the click event for the responsive menu
    const [click, setClick] = React.useState(false);