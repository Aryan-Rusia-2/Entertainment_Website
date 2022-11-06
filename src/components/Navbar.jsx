import React from 'react'
import "../styles/Navbar.css"
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <div>

            
            <section id="home" class="header">

                <nav>
                    <a href="index.html"><img src={logo} alt="" /></a>
                    <div class="nav-links" id="navLinks">
                        <i class="fa fa-close" onclick="hideMenu()"></i>
                        <ul>
                            <li><a class="ctaa1" href="#home">HOME</a></li>
                            <li><a class="ctaa2" href="#project">PROJECT</a></li>
                            <li><a class="ctaa3" href="#team">TEAM</a></li>
                            <li><a class="ctaa5" href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <i class="fa fa-bars" onclick="showMenu()"></i>
                </nav>

                <div class="text-box">
                    <h1 class="cta1">Team Error_404</h1>
                    <p class="special">Error: 404 Brain Not Found</p>
                    <a href="contact.html" class="hero-btn">Click here to know about our Project!</a>
                </div>
            </section>

            

        </div>
    )
}

export default Navbar