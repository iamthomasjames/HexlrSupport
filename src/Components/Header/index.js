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
             <Link to="/track">
             <div style={{display:"flex" ,width:"200px",height:"50px",backgroundColor:"green",justifyContent:"center",alignItems:"center",borderRadius:"20px",color:"white",marginTop:"30px"}}>
              Track token
            </div>
             </Link>
           
          
        </div>
    )
}
