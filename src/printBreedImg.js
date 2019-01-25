import React from "react";

export const PrintBreedImg = (props) => (
  <>
  { props.breedPic ?
    <div>
      <img src={props.breedPic}/>
    </div> 
    : null }
  </>
)
