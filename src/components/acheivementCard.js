import React from 'react'
import "../css/acheivementCard.css"
export default function AcheivementCard(Props) {
  return (
    <div className="acheivementcard">
        <div className='topImg' style={{backgroundColor:Props.bg}}>
        <p>{Props.body}</p>
    <p>{Props.subbody}</p>
        </div>
  <div className="container">
    <h4><b>{Props.head}</b></h4>
   
  </div>
</div>
  )
}
