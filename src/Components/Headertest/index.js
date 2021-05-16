import React from 'react'
import '../../App.css'
import {
  Link
} from "react-router-dom";
import logo from '../../Assets/Images/logo.png'
export default function index() {
    return (
        <div className="container1">
              <a  href="https://hexlr.com">
              <img src={logo} alt="logo" width="140px" height="100px"/>
              </a>
           
          
        </div>
    )
}
