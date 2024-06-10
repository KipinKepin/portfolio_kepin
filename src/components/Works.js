import "../component_style/ProjectList.css"
import React from 'react'
import ProjectList from "./ProjectList"
import ProjectData from "./ProjectData"

const Works = () => {
    return (
        <div className="container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {ProjectData.map((val, ind) => {
                    return (
                        <ProjectList
                            key={ind}
                            imgSrc={val.imgSrc}
                            title={val.title}
                            text={val.text}
                            tech={val.tech}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Works