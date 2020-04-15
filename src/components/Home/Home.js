import React from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../logo.svg";
import HeroSlider from '../HeroSlider';
import Navbar from '../Navbar';

const Home = () => {


  return(
    <div style={{color: 'black'}}>
    <HeroSlider />
    <div style={{height: '100vh'}}>
    <h1> Welcome </h1>

    </div>
  </div>
)};


export default Home;