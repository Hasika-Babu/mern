
import {useState} from 'react';


function Login() {
  let firstname = "Hasika";
  //let email = "hasikababu01@gmail.com";
  const[email,setEmail] = useState('');<br></br>
  const[password,setPassword] = useState('');<br></br>
  //const[address,setaddress] = useState('');
  //const[mobile,setMobile] = useState('');<br></br>
  const valid =()=> {
    if(email === ''){
      alert("please enter a email id");
    }else if(password === ''){
      alert("please enter a valid password");
    }else{
      alert("submitted successfully..")
    }

  }
  return (
    <div className="container">
      <h1>this is react app component</h1>
      {firstname}
      {email}
      {password}
      
    
      <input type="text" placeholder='mail_id' onChange={(e)=>setEmail(e.target.value)}/> 
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={()=>valid()}>SUBMIT</button>
    </div>
  );
}


export default Login;