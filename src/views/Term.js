import React from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'



const Term = () => {
    const navigate = useNavigate();  
  return (
    <>
       <Navbar />
     <div className="row p-5"> 
   <div className="col-sm-3 pt-5">
     <div className="card rounded shadow-lg" id="cambridge">
        <div className="card-body">
          <h6 className="card-title">
          Term 1
            </h6>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5" >
    <div className="card rounded shadow-lg" id="primary">
        <div className="card-body">
        <h6 className="card-title">
          Term 2
            </h6>
        </div>
      </div>
    </div>
    <div className="col-sm-3 pt-5">
    <div className="card rounded shadow-lg"  id="secondary">
        <div className="card-body">
        <h6 className="card-title">
          Term 3
            </h6>
        </div> 
      </div>
    </div>
  </div>
<div className="row  justify-content-between col-sm-1 pl-5  text-danger cursor-pointer "id="clear" style={{width:155}}>
<div className="card" onClick={()=>{
      navigate("/");
   }}>
         Back
      </div>
    <div className="card">
         Clear
      </div>
    </div> 
    </>
  )
}

export default Term
