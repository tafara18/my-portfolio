import "./Heroimg.css";
import React from 'react'
import web1 from "../images/web1.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
<img className="into-img" src={web1}/>
        </div>
        <div className="content">
<p>Hello My name is Tafara,
l am a web developer from Harare,zimbabwe. <br/>l enjoy building everything from small business sites to rich interactive web apps.<br/> As a developer, my superpower happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.

</p>
<h1>React Developer</h1><br/>
<br/>
<div>
    <Link to="/PROJECTS" className="btn">
    Projects</Link>
    <Link to="/CONTACT" className="btn-light">
    CONTACT</Link>
</div>
        </div>
    </div>
  )
}

export default Heroimg