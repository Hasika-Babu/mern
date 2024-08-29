
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Web from './Web';
import { myStore } from './linux/Config';

let routerPaths = createBrowserRouter([
  {"path":"/Header","element":<Header/>},
  {"path":"/Home","element":<Home/>},
  {"path":"/About","element":<About/>},
  {"path":"/Contact","element":<Contact/>},
  {"path":"/Web","element":<Web/>},
 
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
