import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import CoachOne from "./Pages/Coach/CoachOne";
import CoachTwo from "./Pages/Coach/CoachTwo";
import CoachFive from "./Pages/Coach/CoachFive";
import CoachSix from "./Pages/Coach/CoachSix";
import CoachThree from "./Pages/Coach/CoachThree";
import CoachFour from "./Pages/Coach/CoachFour";
import Plan from "./Pages/Plans/Plan";
import AppLayout from "./Components/Trainer/Layout";
import TrainerHome from "./Pages/Trainer/TrainerHome";
import TrainerDashboard from "./Pages/Trainer/TrainerDashboard";
import TrainerClient from "./Pages/Trainer/TrainerClient";
import Community from "./Pages/Trainer/Community";
import Reviews from "./Pages/Trainer/Reviews";
import Form from "./Pages/trackHealth/Form";
import FormTrainer from "./Pages/Coach/RealCoach/Form";

import Result from "./Pages/trackHealth/Result";
import ProtectedRoute from "./Protected/ProtectedRoute";
import PrivateRoutes from "./Protected/ProtectedRoute";
import HomeComm from "./Pages/Community/HomeComm";
import MeetExperts from "./Pages/MeetExperts";
import Dashboard from "./Pages/Client/Dashboard";
import Help from "./Pages/Client/Help";

// import About from './pages/about';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Home />
              </>
            }
            path="/"
            exact
          />
          {/* </Route> */}
          {/* <Route path="/" element={<ProtectedRoute />}>
            <Route
              index
              element={
                <>
                  <div className="gradient__bg">
                    <Navbar />
                  </div>
                  <Home />
                </>
              }
            ></Route>
          </Route> */}
          <Route
            path="/signin"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <SignUp />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/services"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Services />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/career"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Career />
              </>
            }
          ></Route>
          <Route path="/coach/1" element={<CoachOne />}></Route>
          <Route path="/coach/2" element={<CoachTwo />}></Route>
          <Route path="/coach/3" element={<CoachThree />}></Route>
          <Route path="/coach/4" element={<CoachFour />}></Route>
          <Route path="/coach/5" element={<CoachFive />}></Route>
          <Route path="/coach/6" element={<CoachSix />}></Route>
          <Route path="/plans" element={<Plan />}></Route>
          <Route path="/track" element={<Form />}></Route>
          <Route path="/community" element={<HomeComm />}></Route>
          <Route path="/meetexperts" element={<MeetExperts />}></Route>

          <Route path="/choosetrainer" element={<FormTrainer />}></Route>

          {/* <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} /> */}

          <Route path="/trainer/home" element={<TrainerHome />}></Route>
          <Route
            path="/trainer/dashboard"
            element={<TrainerDashboard />}
          ></Route>
          <Route path="/trainer/client" element={<TrainerClient />}></Route>
          <Route path="/trainer/community" element={<Community />}></Route>
          <Route path="/trainer/reviews" element={<Reviews />}></Route>

          <Route path="/client/home" element={<Dashboard />}></Route>
          <Route path="/client/help" element={<Help />}></Route>

          {/* <Route path="/trainer/result" element={<Result />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
