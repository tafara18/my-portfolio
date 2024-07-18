import React from 'react';
import NavBar from "../components/NavBar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Heroimg3 from '../components/Heroimg3';

const HOME = () => {
  return (
    <div>
     <NavBar/>
     <Heroimg/>
     <Heroimg2/>
     <Heroimg3/>
     <Footer/>
    </div>
  );
};

export default HOME;