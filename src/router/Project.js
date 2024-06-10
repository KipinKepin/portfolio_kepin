import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroOther from '../components/HeroOther'
import Works from '../components/Works'

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroOther heading="PROJECTS" text="Some of what I have done before" />
            <Works />
            <Footer />
        </div>
    )
}

export default Project