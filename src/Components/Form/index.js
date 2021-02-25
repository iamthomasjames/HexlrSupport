import React from "react";
import { useState, useEffect,useRef } from "react";
import "../../App.css";
import bug from "../../Assets/Images/bug.svg";
import feedback from "../../Assets/Images/feedback.svg";
import question from "../../Assets/Images/question.svg";
import feature from "../../Assets/Images/feature.svg";
import axios from 'axios'
import loading1 from '../../Assets/Images/loading.gif'

const Form = () => {
  const [supportDetails, setsupportDetails] = useState(null);
  const myRef = useRef(null)
  const [Name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [company, setCompany] = useState(null);
  const [desc, setDesc] = useState(null);
  const [reson, setReason] = useState(null);
  const [color, setColor] = useState("#d5e1e2");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    document.getElementById("form-id").style.visibility='hidden'
  }, [])

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
   
    const supportValues = {
      name: Name,
      phone: phone,
      email: email,
      company: company,
      description: desc,
      reason: "Bug",
    };
    axios
      .post("https://trusting-dubinsky-942dd3.netlify.app/add/", supportValues)
      .then(function (response) {
        setLoading(false);
        setToken(response.data);
        console.log(response);
      })
      .catch(err=>{
        setLoading(false);
        
      })
  };

  return (
    <>
  
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>
          So what brings you here <span className="primary-color">today?</span>
        </h1>
      </div>

      <div className="form-container">
        <div className="form-style">
          <div
            className="support-container swing"
            onClick={() => {
              document.getElementById("form-id").style.visibility='visible'
              myRef.current.scrollIntoView()
              setReason("Report a bug");
              setColor('#642b73')
            }}
          >
            <img src={bug} height="50px" width="50px" alt="bug" />
            <span className="textd">Report a bug</span>
          </div>
          <div
            className="support-container swing"
            onClick={() => {
              document.getElementById("form-id").style.visibility='visible'
              myRef.current.scrollIntoView()
              
              setReason("General queries")
              setColor('tomato')
            }}
          >
            <img src={question} height="50px" width="50px" alt="bug" />
            <span>General queries</span>
          </div>
          <div
            className="support-container swing"
            onClick={() => {
              document.getElementById("form-id").style.visibility='visible'
              myRef.current.scrollIntoView()
              setReason("Feedback")
              setColor('#1F4788')
            }}
          >
            <img src={feedback} height="50px" width="50px" alt="bug" />
            <span>Feedback</span>
          </div>
          <div
            className="support-container swing"
            onClick={() => {
              document.getElementById("form-id").style.visibility='visible'
              myRef.current.scrollIntoView()
              setReason("Ask for a feature")
              setColor('#35BDD0')
            }}
          >
            {console.log(color)}
            <img src={feature} height="50px" width="50px" alt="bug" />
            <span>Ask for a feature</span>
          </div>
        </div>
      </div>
      {
        !loading &&  (
          <div ref={myRef} style={{ backgroundColor: `${color}`, padding: "10px 0px 10px 0px" }} id="form-id">
          <h1 style={{color:"white"}}>{reson}</h1>
          <div className="container">
            <form>
              <ul className="flex-outer" style={{backgroundColor:`${color}`}}>
                <li>
                  <label for="first-name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="input-border"
                    placeholder="Enter your name here"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </li>
                <li>
                  <label for="last-name">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-border"
                    placeholder="Enter your phone here"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </li>
                <li>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="input-border"
                    placeholder="Enter your email here"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </li>
                <li>
                  <label for="phone">Company/Website</label>
                  <input
                    type="text"
                    id="comapany"
                    className="input-border"
                    placeholder="Enter your company/website here"
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </li>
                <li>
                  <label for="message">{reson}</label>
                  <textarea
                    rows="6"
                    id="message"
                    className="input-border"
                    placeholder="Enter description here"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  ></textarea>
                </li>
                <br />
                <li>
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "green",
                      height: "50px",
                      borderStartEndRadius: "20px",
                    }}
                    type="submit"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        )
      }
        
         
       
       {
         token && (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", backgroundColor:"tomato",color:"white",height:"70px",paddingLeft:"10px",paddingRight:"10px"}}>
          <span>Please take a note of your token number : <span style={{backgroundColor:"green",color:"white",borderRadius:"30px",padding:"10px"}}>{token}</span></span>
        </div>
         )
       }
     
      {
        loading && ( <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <img src={loading1}  alt="loading"/>
        <span>Submitting your data</span>
      </div>)
      }
     
      
    </>
  );
};

export default Form;
