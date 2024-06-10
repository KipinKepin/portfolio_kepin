import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../component_style/HeroImg.css';
import IntroImg from '../assets/bg.jpeg';

const HeroImg = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const textArray = ['College Student', 'Web Enthusiast', 'Math Enthusiast', 'Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'UI/UX Designer'];
    const [currentText, setCurrentText] = useState(textArray[currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [textArray]);

    useEffect(() => {
        setCurrentText(textArray[currentIndex]);
    }, [currentIndex, textArray]);

    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Intro" />
            </div>
            <div className="content">
                <p style={{ fontWeight: "300" }}>HI, I'M KEVIN SAMOSIR</p>
                <div className='garis'></div>
                <h1>{currentText}</h1>
                <div className="button">
                    <Link to="/project" className="btn">projects</Link>
                    <Link to="/contact" className="btn btn-light">contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;