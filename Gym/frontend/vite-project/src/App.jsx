import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Navbar from "./Componenets/Navbar.jsx";
import Hero from "./Componenets/Hero.jsx";
import WorkoutSessions from "./Componenets/WorkoutSession.jsx";
import Gallery from "./Componenets/Gallery.jsx";
import Pricing from "./Componenets/Pricing.jsx";
import Contact from "./Componenets/Contact.jsx";
import BMICalculator from "./Componenets/BMICalculator.jsx";
import Footer from "./Componenets/Footer.jsx";





const App = () => {
  return (
    <Router>
    <Navbar />
    <Hero />
    <WorkoutSessions />
    <Gallery />
    <Pricing />
    <Contact />
    <BMICalculator />
    <Footer />
    <ToastContainer theme="dark" position="top-center" />
  </Router>
  )
}

export default App;
