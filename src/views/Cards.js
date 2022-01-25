import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Cambridge from '../assets/cambridge.png'
import Primary from '../assets/primary.png'
import Secondary from '../assets/secondary.png'
import Tvet from '../assets/tvet.png'
import Uzi from '../assets/uzi-logo.png'



function Cards() {
  return (
    // <Router>
    <div>
      <div className="row p-5">
   <div className="col-sm-3 pt-5" >
<div className="card rounded shadow-lg" id="cambridge">
        <div className="card-body">
        <img src={Cambridge}  height="60px" alt='image'/>
          <h5 className="card-title">CAMBRIDGE</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" >
    <div className="card rounded shadow-lg" id="primary">
        <div className="card-body">
        <img src={Primary}  height="60px" alt='primary'/>
          <h5 className="card-title">PRIMARY</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5">
    <div className="card rounded shadow-lg"  id="secondary">
        <div className="card-body">
        <img src={Secondary}  height="60px" alt='image'/>
          <h5 className="card-title">SECONDARY</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5">
    <div className="card rounded shadow-lg" id="tvet">
        <div className="card-body">
        <img src={Tvet}  height="60px"  alt='tvet'/>
          <h5 className="card-title">TVET</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5">
    <div className="card rounded shadow-lg" id='uzi'>
        <div className="card-body">
        <img src={Uzi}  height="60px"  alt={Uzi}/>
          <h5 className="card-title">UZI DRIVING SCHOOL</h5>
        </div>
      </div>
    </div>
  </div>

<div className="col-sm-1 pl-5  text-danger cursor-pointer "id="clear">
    <div className="card">
         clear
      </div>
    </div>
    </div>
    // </Router>

  )
}

export default Cards;