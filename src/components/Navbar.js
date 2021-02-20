import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ game }) => {
  return (
    <li>
      <Link to={`/${game.name}`}>{game.name}</Link>
    </li>
  );
};

export default Navbar;
