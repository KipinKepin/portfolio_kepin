import "../component_style/HeroOther.css"
import React, { Component } from 'react'

class HeroOther extends Component {
    render() {
        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>
                        {this.props.heading}
                    </h1>
                    <em>
                        {this.props.text}
                    </em>
                </div>
            </div>
        );
    }
}

export default HeroOther;