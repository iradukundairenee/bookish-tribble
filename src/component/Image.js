import React from 'react';
import '../../src/App.css';
import image from '../assets/user.png';



function Image() {
  return (
    <>
      <img src={image}  height="35px" width="35px" alt="image" id="profile"/>
    </>
  )
}

export default Image;