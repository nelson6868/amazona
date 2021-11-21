import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signIn">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/product/:id" element={<ProductScreen/>} />
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
