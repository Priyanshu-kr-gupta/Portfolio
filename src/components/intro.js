import React,{useEffect} from "react";
import Image from "../images/priyanshu.jpg"
import "../css/intro.css"

export default function Intro(props)
{
    const textsToType = [
        "5 ⭐ HackerRank (c++)",
        "CP",
        "Web Devlopement",
        "5 ⭐ Problem solving HackerRank"
        
    ];
    const typingSpeed = 50; // Adjust the speed by changing this value
    const breakTime = 2000; // Adjust the break time (in milliseconds) between text changes

    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        const currentText = textsToType[textIndex];
        if (charIndex < currentText.length) {
            document.getElementById("typewriter-text").innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Clear the content before typing the next text
            setTimeout(clearText, breakTime);
        }
    }

    function clearText() {

        document.getElementById("typewriter-text").innerHTML = '';
        textIndex===3?textIndex=0:textIndex++;
        // textIndex++;

        charIndex = 0;
        setTimeout(typeWriter, typingSpeed);
    }

  
    return( 
        <div className="intro" onLoad={typeWriter}>
            <br/>
        
        <div className="introbox" >
            
        <div className="right" >
            <img src={Image} alt="not found"/>       
        </div>
        <div className="left" >
            <h1>Hii! I,m Priyanshu Kumar.</h1>
            <h2>I 🧡 to learn and develop.</h2>
            <br/>
            <h5 id="typewriter-text" style={{width:"auto",height:"50px"}}></h5>
        
        </div>
      

  
    </div>
        {/* <div className="lowerintro" style={{color:x}}>
        <Handles url="dlnpriyanshu@gmail.com"/>
        <Handles url="https://www.linkedin.com/in/priyanshu-kumar-143995246"/>
        <Handles url="https://github.com/priyanshu-kr-gupta"/>
        <Handles url="https://instagram.com/priyanshu._.kmr"/>
  
        </div> */}
        </div>
    
    )
}