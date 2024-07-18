import React from 'react';
import NavBar from "../components/NavBar";

import Heroimg2 from '../components/Heroimg2';
import PricingCard from '../components/PricingCard';
import Footer from '../components/Footer';
import WorkCard from '../components/WorkCard';

const PROJECTS = () => {
  return (
    <div> 
      <NavBar/>
      <Heroimg2  heading = "PROJECTS." text = " Some of my most recent works" />
      <WorkCard/>
      <PricingCard/>
      <Footer/>
      
    </div>
  );
};

export default PROJECTS;