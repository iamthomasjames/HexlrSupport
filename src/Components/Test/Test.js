import "../../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import triangle from "../../Assets/Images/triangle.svg";
import HeaderTest from '../Headertest'
import InfoTest from '../InfoTest'


const Test = () => {
  const [search, setSearch] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState(false);

  const getData = async () => {
    await axios
      .get("https://trusting-dubinsky-942dd3.netlify.app/" + search)
      .then((response) => {
        if (response.data === null) {
          setError(true);
        } else {
          setName(response.data.name);
          setEmail(response.data.email);
          setStatus(response.data.status);
        }

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderTest />
      <InfoTest />
    </>
  );
};

export default Test;
