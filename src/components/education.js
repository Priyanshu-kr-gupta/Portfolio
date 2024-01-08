import React from 'react'
import "../css/education.css"
import Educationcard from './educationcard.js'
export default function Education(Props) {
  return (
    <div>
     
       <h1>EDUCATION</h1>
    
       <br/>
      <br/>
     
       <div className='educationbox'>
   

          <Educationcard  heading="Nit Jamshedpur" details="Master’s in computer application " location="Jamshedpur" year="2023-2026"/>
          <Educationcard  heading="Karim City College" details="Bachelor’s in computer application" location="Jamshedpur" year="2020-2023"/>
          <Educationcard heading="DAV Public School, Nit Campus" details="CBSE | Class XII | percentage: 78.60%" location="Jamshedpur" year="2020"/>
          <Educationcard heading="Gaytri Shiksha Niketan" details="CBSE | Class X | percentage: 72.20% " location="Jamshedpur" year="2018"/>
   
         
       </div>
      
    </div>
  )
}
