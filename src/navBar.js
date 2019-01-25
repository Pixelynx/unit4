import React from "react";
import { Link } from "react-router-dom";
import RanDogImg from "./ranDogImg.js";
import ranBreedImg from "./ranBreed.js";

export const NavBar = (props) => {
  return(
    <>
      <nav>
        <Link to="/random">Random Doggy</Link>
        <br />
        <Link to="/randomBreed">Random Breed</Link>
      </nav>
    </>
  )
}
