import { Link } from "react-router-dom"
import "../component_style/AboutContent.css"
import React from 'react'
import kepin1Img from "../assets/kepin1.jpg"
import kepin2Img from "../assets/kepin2.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Let me tell you something</h1>
                <p>I'm a current 7th semester student that attracted with web programming, especially Frontend</p>
                <Link to="/contact" style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn">contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={kepin2Img} className="img" alt="kepin" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={kepin1Img} className="img" alt="kepin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent