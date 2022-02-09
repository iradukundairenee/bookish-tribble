import React from 'react';
import uzi from '../assets/uzi-logo.png';
import Comp1 from '../component/Comp1'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();  
  return (
    <>
        <div className='row pt-3'>
      <div className='col-8'>
        <h4 className='text-warning float-left pl-5'><img src={uzi} height="30px" width="30px" alt="image"/>UZI</h4>
      </div>
      <div className='col-4'>
        <div className="float-right pr-5 pt-3" style={{display:"flex"}}>

          <div>
          <p className='text-white h6' style={{lineHeight:"1.2"}}>Random Student<div>@Student</div></p>            
            </div> 
            <div>
            <Comp1 />  
              </div>
            <div className='pt-2 text-black rounded mt-1 ' id="account"  onClick={()=>{
      navigate("/Signup");
   }}>
              <dt>Create Your Account</dt>
               </div>  

        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
