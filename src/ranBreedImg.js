import React, { Component } from "react";

class RanBreedImg extends Component {
  constructor() {
    super();
    this.state = {
      ranBreed: []
    }
  }

  render() {
    return(
      <>
        <div>
          <input type="button" value="Breed" />
        </div>
      </>
    )
  }
}

export default RanBreedImg;
