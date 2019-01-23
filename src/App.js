import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { NavBar } from "./navBar.js";
import RanDogImg from "./ranDogImg.js";
import RanBreedImg from "./ranBreedImg.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <Route component={NavBar} />
          <div>
          <Route exact path="/random" component={RanDogImg} />
          <Route exact path="/randomBreed" component={RanBreedImg} />
          </div>
      </div>

    );
  }
}

export default App;
