import React, { Component } from "react";

class RanDogImg extends Component {
  constructor() {
    super();
    this.state = {
      ranImg: []
    };
  }

  render() {
    return (
      <>
        <input type="button" value="Woof" />
      </>
    );
  }
}

export default RanDogImg;
