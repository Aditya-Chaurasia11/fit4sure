import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";  
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
// import About from './pages/about';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

        {/* <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
    </Router>
  );
}

export default App;
