import "../../Form.css";

const table1 =()=>{
    return(
        <>
        <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Bill name"
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Bill contact number"
            />
        </>
    )
}

export default table1;