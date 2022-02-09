import React from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate();  
  return (
    <>
          <Navbar />
     <div className="row p-5"> 
   <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }}>
     <div className="card rounded shadow-lg" id="cambridge">
        <div className="card-body">
          <h6 className="card-title">
          English
            </h6>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }}>
    <div className="card rounded shadow-lg" id="primary">
        <div className="card-body">
        <h5 className="card-title"> ICT</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }} >
    <div className="card rounded shadow-lg"  id="secondary">
        <div className="card-body">
          <h5 className="card-title"> Maths</h5>
        </div> 
      </div>
    </div>
    <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }} >
    <div className="card rounded shadow-lg" id="tvet">
        <div className="card-body">
          <h5 className="card-title"> Science</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }}>
    <div className="card rounded shadow-lg" id='uzi'>
        <div className="card-body">
          <h5 className="card-title">Grade 5</h5>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" onClick={()=>{
      navigate("/Term");
   }}>
    <div className="card rounded shadow-lg" style={{backgroundColor:'#669999'}}>
        <div className="card-body">
          <h5 className="card-title text-white"> Social Studies</h5>
        </div>
      </div>
    </div>
  </div>
<div className="col-sm-1 pl-5  text-danger cursor-pointer "id="clear" style={{width:150}}>
    <div className="card">
         clear
      </div>
    </div> 
    </>
  )
}

export default Courses
