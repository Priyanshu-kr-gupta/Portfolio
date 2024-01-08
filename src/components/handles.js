import React from 'react'
import { SocialIcon } from 'react-social-icons'
export default function Handles(Props) {
  return (
    <div style={{marginLeft:"20px",marginRight:"20px",borderRadius:"50%",boxShadow:"0 0 10px violet"}}><SocialIcon url={Props.url}/></div>
  )
}
