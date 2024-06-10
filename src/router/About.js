import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroOther from '../components/HeroOther'
import AboutContent from '../components/AboutContent'
import Hobby from '../components/Hobby'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroOther heading="Me" text="If you think you know me, it means you don't know me" />
            <AboutContent />
            <Hobby />
            <Footer />
        </div>
    )
}

export default About