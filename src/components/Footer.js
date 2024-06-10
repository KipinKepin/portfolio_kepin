import "../component_style/Footer.css"
import React from 'react'
import { FaHome, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <a href="https://goo.gl/maps/v9LFjMiAEBvYukQMA" className="adress">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem", marginTop: "5px" }} />
                        <div>
                            <p>Jl. Pukat VII, Gg. Kristen No. 17</p>
                            <p>Medan, Indonesia</p>
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=6285155035225" className="whatsapp">
                        <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem", marginTop: "5px" }} />
                        <div>
                            <p>+62 851-5503-5225</p>
                        </div>
                    </a>
                    <a href="mailto:samosirkevin873@gmail.com" className="mail">
                        <FaEnvelope size={20} style={{ color: "#fff", marginRight: "2rem", marginTop: "5px" }} />
                        <div>
                            <p>samosirkevin873@gmail.com</p>
                        </div>
                    </a>
                </div>

                <div className="right">
                    <h4>Follow me on :</h4>
                    <div className="sosmed">
                        <a href="https://www.facebook,com/kevin.samosir.505">
                            <FaFacebook className="medsos" size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.instagram.com/kevinsmr__">
                            <FaInstagram className="medsos" size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/KipinKepin">
                            <FaGithub className="medsos" size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-samosir-926a45207/">
                            <FaLinkedin className="medsos" size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer