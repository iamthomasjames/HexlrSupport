import React from 'react'
import '../../App.css'
import {
  Link
} from "react-router-dom";
export default function index() {
    return (
        <div className="container1">
              <Link to="/">
              <h2 className="title">Hexlr</h2>
              </Link>
             <Link to="/track">
             <div style={{display:"flex" ,width:"200px",height:"50px",backgroundColor:"green",justifyContent:"center",alignItems:"center",borderRadius:"20px",color:"white"}}>
              Track token
            </div>
             </Link>
           
          
        </div>
    )
}
