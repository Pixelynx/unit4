import React, { Component } from "react";
import axios from "axios";
import { PrintBreedImg } from "./printBreedImg.js";

class RanBreedImg extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      breedPic: "",
      listBreeds: []
    }
  }


  renderAllBreeds = () => {
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
      let dogs = Object.keys(res.data.message);
      this.setState({ listBreeds: dogs })
    }).catch(err => console.log(err))
  }

  breedPicture = () => {
    
    axios.get("https://dog.ceo/api/breed/{this.state.selected}/images/random")
    .then(pic => {
      let breedPics = pic.data.message;
      this.setState({ breedPic: breedPics })
    }).catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.renderAllBreeds();
  }

  handleChange = (event) => {
    this.setState({ selected: event.target.value })
    console.log(this.breedPicture());
  }


  renderBreeds = () => {
    let printBreed = this.state.listBreeds.map((dog, i) => {
      return <option>{dog}</option>
    })
    return printBreed
  }


  render() {
    let printBreed = this.renderBreeds();
    return(
      <>
        <div>
          <select onChange={this.handleChange}>
            <option value={this.state.selected}></option>
            {printBreed}
          </select>

          <PrintBreedImg breedPic={this.state.breedPic} />

        </div>
      </>
    )
  }
}

export default RanBreedImg;
