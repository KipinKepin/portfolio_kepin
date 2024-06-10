import "../component_style/ProjectList.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectList = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgSrc} alt="project" />
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
                <p>{props.text}</p>
                <h4>Using:</h4>
                <p>{props.tech}</p>
                <div className="project-btns">
                    <NavLink to="/soon" className="btn">Source Code</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectList
