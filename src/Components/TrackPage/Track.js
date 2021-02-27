import '../../App.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import triangle from '../../Assets/Images/triangle.svg'

const Track =()=>{

    const [search, setSearch] = useState(null)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [status, setStatus] = useState()
    const [error,setError]= useState(false)


    const  getData =async() =>{
        await axios.get('https://trusting-dubinsky-942dd3.netlify.app/'+search)
        .then((response) => {
            if(response.data===null){
                setError(true)
            }
            else{
                setName(response.data.name);
                setEmail(response.data.email);
                setStatus(response.data.status);
            }
         
           console.log(response.data)
           
        })
        .catch(err=>{
           console.log(err)
        })
    }

    return(
        <>
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",paddingRight:"30px",paddingLeft:"30px"}}>
             <div>
                 <h3>Track your token</h3>
             </div>
             <div style={{display:"flex",flexDirection:"column"}}>
                 <input maxLength="6" type="text" onChange={(e)=>{
                      setError(false);
                      setSearch(e.target.value);
                 }}/>
                 <button className="search-button" onClick={getData}>search</button>
             </div>
{error&& (
             <div>
                 <p>Sorry, we could'nt find your record. Please re-check your token</p>
             </div>)}
             <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Status</th>
    <th>Give alert</th>
  </tr>
 
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{status}</td>
        <td onClick={()=>{
            alert('We have given alert to our associate. You will get a call/message with the details soon!!')
        }}>{name &&(<img src={triangle} alt="" width="25px" height="25px"/>)}</td>
       
      </tr>
 

</table>

         </div>
        </>
    )
}

export default Track