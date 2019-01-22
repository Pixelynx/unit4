import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RanDogImg from "./ranDogImg.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/random">Random Dog</Link>
        </nav>
        <div>
          <Route exact path="/random" component={RanDogImg} />
        </div>
      </div>
    );
  }
}

export default App;
