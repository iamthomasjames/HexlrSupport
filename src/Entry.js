import Header from "./Components/Header";
import Form from "./Components/Form";
import Info from "./Components/Info";
import {useEffect,useState} from 'react'
const Entry = () => {

  const [hour, setHour] = useState(null);

  useEffect(() => {
    getHour();
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour1 = date.getHours();
    sessionStorage.setItem('localtime',hour1)
    setHour(hour);
  };

  return (
    <>
    
      
      <Form />
    </>
  );
};

export default Entry;