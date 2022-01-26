import React ,{useState}from 'react';
import { IoLogOutOutline,IoPersonOutline} from "react-icons/io5";
import Photo from './Image'




function Comp1() {
  const[toggle,setToggle]=useState(false);
  return (
    <div>
    <div onClick={()=>setToggle(!toggle)}><Photo  id="Photo"/></div>
    {toggle &&( 
    <ul className='list-group' style={{zIndex:10,position:'absolute',marginLeft:-120,marginTop:15,width:150}}>
      <li className='list-group-item' style={{backgroundColor:'#003366',color:'white'}}><IoPersonOutline /><>Profile</></li>
      <li className='list-group-item' style={{backgroundColor:'#003366',color:'white'}}><IoLogOutOutline/><>Logout</></li>
    </ul>
    )}
    </div>

  )
}

export default Comp1;