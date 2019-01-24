import React, { Component } from "react";
import axios from "axios";

class RanBreedImg extends Component {
  constructor() {
    super();
    this.state = {
      ranBreed: []
    }
  }

  // "https://dog.ceo/api/breed/{breed}/images/random"



  componentDidMount = () => {
    let url = "https://dog.ceo/api/breeds/list/all"

    axios.get(url)
    .then(res => {
      let dogs = Object.keys(res.data.message);
      let printBreed = dogs.forEach(dog => {
        console.log(dog)
        return dog
      })
      return printBreed
      console.log(printBreed)

      this.setState({ ranBreed: printBreed })
    })
  }

  render() {
    // const printBreed = this.renderDogs()
    console.log(this.state)

    return(
      <>
        <div>
          <select>

          </select>

        </div>
      </>
    )
  }
}

export default RanBreedImg;
