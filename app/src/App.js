import './App.css';
import Home from './Home';
import About from './About';

function App() {
    const getuser=async()=>{
      let res=await fetch('https://reqres.in/api/users/2');
      let serverRES =await res.json();
      console.log(serverRES['data']);
    }

  return (
    <div className="App">
      <Home/>
      <About/>
      <button onClick={getuser}> click to get user list </button>
    </div>
  );
}

export default App
