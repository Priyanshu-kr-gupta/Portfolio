import React from 'react'
import Acheivementcard from '../components/acheivementCard'
import "../css/acheivement.css"
export default function Acheivement() {
  return (
    <div>
         <h1 >Acheivements</h1>

    <br/>
   <br/>
   <div className='acheivementBox'>

   <Acheivementcard bg="aqua" head="Codeforces" body="140+ Questions solved (c++) " subbody="Problem solving "/>
   <Acheivementcard bg="teal" head="GFG" body="150+ Questions solved (c++) " subbody="Practice Problems "/>
   <Acheivementcard bg="chartreuse" head="NIMCET" body="AIR 514 " subbody="NIT JAMSHEDPUR Alloted "/>
   <Acheivementcard bg="teal" head="CUET" body="CUET Marks : 226 " subbody="Eligible for DU, JNU, BHU "/>
   <Acheivementcard bg="#0074cc" head="BCA" body="Batch 4th Topper" subbody="Karim city college, Jamshedpur "/>
   <Acheivementcard bg="#228B22" head="TCS" body=" Selected for TCS (Under BCA)" subbody="TCS Smart hiring 2023"/>
   <Acheivementcard bg="#E6E6FA" head="WIPRO" body="Selected for WIPRO (Under BCA)" subbody="WIPRO WILP 2023"/>
   <Acheivementcard bg="#008080" head="BCA" body="Awarded For Best Performance in Placement (BCA)" subbody="Karim city college, Jamshedpur "/>
 
   </div>
    </div>
  )
}

