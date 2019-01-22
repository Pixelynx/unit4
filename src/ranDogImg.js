import React, { Component } from "react";
import axios from "axios";

class RanDogImg extends Component {
  constructor() {
    super();
    this.state = {
      ranImg: ""
    };
  }

  apiCall = () => {
    let url = "https://dog.ceo/api/breeds/image/random";

    axios.get(url)
    .then(res => {
      let pic = res.data.message
      this.setState({ ranImg: pic })
    })
  }

  render() {
    const { ranImg } = this.state;

    return (
      <>
          <input type="button" value="Woof" onClick={this.apiCall}/>
          <img src={ranImg}/>
      </>
    );
  }
}

export default RanDogImg;
