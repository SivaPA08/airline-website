import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "../pages/intro";
import FlightInfo from "../pages/flightinfo";
import Login from "../pages/login";
import Mybooking from "../pages/mybooking";
import Payment from "../pages/payment";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/flightinfo" element={<FlightInfo />} />
        <Route path="/login" element={ <Login/>}/>
        <Route path="/mybooking" element={ <Mybooking/> }/>
        <Route path="/payment" element={ <Payment/>}/>
      </Routes>
    </Router>
  );
}
