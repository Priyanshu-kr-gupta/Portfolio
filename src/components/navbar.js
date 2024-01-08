import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import '../css/navbar.css'
import "../css/customizer.css"
export default function Navbar(Props)
{
  const [scroll,setScroll]=useState(0);

  useEffect(()=>{
    console.log("sdf")
    window.scrollTo({
      top: scroll,
      behavior: 'smooth',
    });
  })
 

    return(
        <>
      <>
      <div id="navbar">
         <div className='name' onClick={()=>setScroll(0)}> 
           Priyanshu Kumar
          </div>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" id="tog">
          <div id="menu">▼</div>
          <div id="close">▲</div>
        </label>
   
        <div id="navmenu">
         
          <div onClick={()=>setScroll(620)}>
         Education
          </div>

       
        
              <div onClick={()=>setScroll(1330)}>
                Skills
              </div>
            

          <div onClick={()=>setScroll(2000)}>
            Acheivements
          </div>
          <div onClick={()=>setScroll(2600)}>
            Connect
          </div>
        </div>
      </div>
    </>
      
    </>
    );
}