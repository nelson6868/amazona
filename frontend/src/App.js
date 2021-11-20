
import React from "react";

import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";



function App() {
  return (

    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
      <Routes>
       
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={ProductScreen} exact/>

        
        </Routes>
    
       {/* <HomeScreen/> */}
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
