import React from 'react'
import  Handles  from './handles.js'
export default function Connect() {
  return (
    <div style={{position:"relative",marginTop:"20vh"}}>
        <h1>Connect</h1>
        <br/>
        <br/>
        <br/>
         <div className="lowerintro" >
       
        <button style={{all:"unset",width:"50px",height:"50px",backgroundColor:"teal",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"18px"}}><a href="mailto:dlnpriyanshu@gmail.com" style={{all:"unset",cursor:"pointer"}}>📧</a></button>
        <Handles url="https://www.linkedin.com/in/priyanshu-kumar-143995246"/>
        <Handles url="https://github.com/priyanshu-kr-gupta"/>
        <Handles url="https://instagram.com/priyanshu._.kmr"/>
  
        </div>
    </div>
  )
}
