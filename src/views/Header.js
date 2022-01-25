import React from 'react';
import image from '../assets/user.png'
import uzi from '../assets/uzi-logo.png'


function Header() {
  return (
    <div className='row pt-3'>
      <div className='col-8'>
        <h4 className='text-warning float-left pl-5'><img src={uzi} height="30px" width="30px" alt="image"/>Uzi</h4>
      </div>
      <div className='col-4'>
        <div className="float-right pr-5 pt-3" style={{display:"flex"}}>
          <div>
          <p className='text-white h6' style={{lineHeight:"1.2"}}>Random Student<div>@Student</div></p>
          </div>
          <div>
          <img src={image}  height="35px" width="35px" alt="image"/>
          </div>
          <div className='pt-2 text-black rounded' id="account">
          <dt>Create Your Account</dt>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;