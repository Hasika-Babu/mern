import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {useState} from 'react';

function App() {
  let firstname = "Hasika";
  //let email = "hasikababu01@gmail.com";
  const[email,setEmail] = useState('');<br></br>
  const[address,setaddress] = useState('');
  const[mobile,setMobile] = useState('');<br></br>
  const valid =()=> {
    if(email == ''){
      alert("please enter a email id");
    }else if(mobile == ''){
      alert("please enter a mobile number");
    }else{
      alert("submitted successfully..")
    }

  }
  return (
    <div className="container">
      <h1>this is react app component</h1>
      {firstname}
      {email}
      {address}
      {mobile}
      <Home/>
      <input type="text" placeholder='mail_id' onChange={(e)=>setEmail(e.target.value)}/> 
      <input type="number" placeholder='mobile' onChange={(e)=>setMobile(e.target.value)}/>
      <button onClick={()=>valid()}>SUBMIT</button>
    </div>
  );
}


export default App;