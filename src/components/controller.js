import React,{useState} from "react";
import "../css/customizer.css"
import Navbar from './navbar';
import Intro from './intro';
import Education from "./education.js";



export default function Controller()
{
    
    const [count,setCount]=useState(100);
    const [theme,setTheme]=useState("light");
    function Customanimation()
    {
        // document.getElementById("custombox").marginLeft="75%";
        if(count===100)
        {
            setCount(75);
        }
        else
        {
            setCount(100);
        }
    }
    function ChangeMode(i)
    {
        if(i)
        {
            setTheme("dark");
            document.body.style.backgroundColor="rgba(8, 0, 20, 0.97)"
        }
        else
        {
            setTheme("light");
            document.body.style.backgroundColor="aliceblue"
            // document.body.style.backgroundColor="rgb(61, 102, 156)"
            // document.body.style.backgroundColor="white"
        }
    }  
    return(
        <>        
           <Navbar mode={theme}/>

            <div id="custombox" style={{marginLeft:count+"%"}}>
                <button id="custom" onClick={Customanimation}>🔘</button>
                        <h3 style={{color:"white"}}>Theme</h3>
                        <hr/>
                <div className="mode">
                    <div className="lmode" onClick={()=>ChangeMode(0)}>🌞</div>
                    <div className="dmode" onClick={()=>ChangeMode(1)}>🌙</div>
                </div>
                {/* <br/>
                <br/>
                <h3 style={{color:"white"}}>Text Color</h3>
                        <hr/>
                <div className="mode">
                    <div className="lmode" onClick={()=>ChangeMode(0)}>🌞</div>
                    <div className="dmode" onClick={()=>ChangeMode(1)}>🌙</div>
                </div> */}
            </div>
    
            <Intro mode={theme}/>
            <Education mode={theme} />
        </>

    );
}