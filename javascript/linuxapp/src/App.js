
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './Home';
import Contact from './Contact';
import about from './about';
import Header from './header';
import { myStore } from './linux/Config';

let routerPaths = createBrowserRouter([
  {"path":"/Header","element":<Header/>},
  {"path":"/home","element":<Home/>},
  {"path":"/about","element":<about/>},
  {"path":"/Contact","element":<Contact/>},
 
])

function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
     <RouterProvider router={routerPaths}/>
    </div>
    </Provider>
  );
}

export default App;
