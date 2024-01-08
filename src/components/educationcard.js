import React from 'react'
import "../css/educationcard.css"
export default function Educationcard(Props) {
  return (
    <div className="ecard">
    <div className="card-left">
        <h6>{Props.heading}</h6>
        <p>{Props.details}</p>
    </div>
    <div className="card-right">
      
        <p>{Props.year}</p>
        <p> {Props.location}</p>
    </div>
</div>

  )
}
