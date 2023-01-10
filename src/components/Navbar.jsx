import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logo2 from '../assets/get-started.png'
import navSquare from '../assets/nav-square.png'

export default function Navbar(props) {


  return (
    <>
    <nav className={`navbar  navbar-expand-lg justify-content-between  navbar-${props.mode} bg-white border-bottom border-gray-300`}>
      <div className="container" >
       <img src={navSquare} alt="" width="30px"  className="nav-square" />
        <div className="navbar-brand mx-auto ">
        <img src={logo}style={{marginRight: '10px'}} width="40px" alt="" />
          Text Utilz
          </div>
        <div className="d-flex navbar-nav mx-auto justify-content-around">
          <a className="nav-link mx-3 active" href="/">Home</a>
          <a className="nav-link mx-3" href="#">About</a>
          <a className="nav-link mx-3" href="#">Contact</a>
          <a className="nav-link mx-3 get-started" href="#"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
            <span>&nbsp;Signup</span>
            
            </a>
        </div>
        {/* <span className="navbar-nav form-check form-switch">
        <input className= "form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode=='dark'?'light':'dark'}`} for="flexSwitchCheckDefault">&nbsp; Enable {props.mode=='dark'?'Light':'Dark'} Mode</label>
        </span> */}
      </div>
    </nav>
    </>

  )
}
