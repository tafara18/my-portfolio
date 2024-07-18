import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import  Form  from "../components/Form";


const CONTACT = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2  heading = "CONTACT" text = " Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default CONTACT;