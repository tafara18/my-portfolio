import "./WorkCard.css"
import React from 'react'
import log from "../images/log.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
<img src={log} alt="image"/>
<h2 className="project-title">project
Title</h2>
<div className="pro-details">
    <p>this is text</p>
<div className="pro-btns">
    <NavLink to="url.com" className="btn">
        View
        </NavLink>
        <NavLink to="url.com" className="btn">
        Source
        </NavLink>
</div>
</div>

            </div>
        </div>
    </div>
  )
}

export default WorkCard;