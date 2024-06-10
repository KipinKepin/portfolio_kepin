import "../component_style/Form.css"
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="input your name"></input>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="input your email"></input>

                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="input subject"></input>

                <label htmlFor="message">Message</label>
                <textarea id="message" type="text" rows="6" placeholder="input your message here" />

                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form