import React, { Component } from "react";
import axios from "axios";

class RanBreedImg extends Component {
  constructor() {
    super();
    this.state = {
      ranBreed: ""
    }
  }

  apiCall = () => {
    let url = "https://dog.ceo/api/breeds/image/random"

    axios.get(url)
    .then(res => {
      let pic = res.data.message;
      this.setState({ ranBreed: pic })
    })
  }

  render() {
    const { ranBreed } = this.state;
    return(
      <>
        <div>
          <input type="button" value="Breed" onClick={this.apiCall} />
          <img src={ranBreed} />
        </div>
      </>
    )
  }
}

export default RanBreedImg;
