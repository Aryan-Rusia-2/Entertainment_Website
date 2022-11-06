import React from 'react'
import "../styles/Project.css"
import game from "../images/game.png"
import Tilt from 'react-tilt'

const Project = () => {
    return (

        <div className="outer">

        <section id="project" class="course">
            <h1>Our Project</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="row">
                <div class="course-col c1">
                    <a href="https://6367f4b145f9a975ab0a402f--tangerine-griffin-6e263d.netlify.app/">
                        <h3>Let's Play Games !!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend
                            faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.</p>
                    </a>
                </div>
                <div class="course-col c2">
                    <a href="#">
                        <h3>Look at the latest movies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend
                            faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.</p>
                            </a>
                </div>
                <div class="course-col c2">
                <a href="https://tazvik.itch.io/ghost-game">
                    <h3>Play Ghost Dodging !!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend
                        faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.</p>
                </a>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Project