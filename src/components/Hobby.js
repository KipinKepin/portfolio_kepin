import React from 'react'
import "../component_style/Hobby.css"

const Hobby = () => {
    return (
        <div className="middle">
            <div className="hobby">
                <p className='like'>What I Like : </p>
                <ul style={{ columnGap: "2rem", padding: "0 1rem", margin: "1rem 0", textAlign: "center" }}>
                    <li>Eat</li>
                    <li>Code</li>
                    <li>Chess</li>
                    <li>Joking</li>
                    <li>Bilyard</li>
                    <li>Counting</li>
                    <li>Cube Rubik's</li>
                    <li>Mobile Games</li>
                    <li>Watch Movies</li>
                    <li>Try New Thing</li>
                    <li>
                        <a href="/soon" style={{ color: "#f66", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Someone</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hobby