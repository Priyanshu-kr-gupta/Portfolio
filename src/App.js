import React from 'react'
// import Controller from './components/controller';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Education from "./components/education";
import Acheivement from './components/acheivement';
import Connect from './components/connect';
import {
   BrowserRouter,

 } from "react-router-dom";
// import { useState } from 'react'
import  './App.css'
import Skills from './components/skills';
// import Education from "./components/education.js";

export default function container() {
 return( 
    <>
      <BrowserRouter>
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Acheivement />
      <Connect />
      </BrowserRouter>
    {/* <Education /> */}
    </>
 );
}
