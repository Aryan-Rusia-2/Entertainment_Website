import React from 'react'
import Aryan from "../images/aryanr.jpg"
import AryanP from "../images/aryanp.jpeg"
import Tazvik from "../images/tazvik.jpeg"
import Kush from "../images/kush.jpeg"
import Keshav from "../images/keshav.jpeg"
import Tilt from 'react-tilt'
import "../styles/Members.css"

const Members = () => {
    return (
        <div id="team">
            <section class="campus">
                <h1>Team Members</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div>
                    <div class="row">

                        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                            <div class="campus-col r2">
                                <img src={Aryan} />
                                <div class="layer">
                                    <h3>Aryan Rusia</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatem?
                                    </p>
                                </div>
                            </div>

                        </Tilt>

                        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                            <div class="campus-col r2">
                                <img src={AryanP} />
                                <div class="layer">
                                    <h3>Aryan Patel</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatem?
                                    </p>
                                </div>
                            </div>
                        </Tilt>

                        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                            <div class="campus-col r2">
                                <img src={Tazvik} />
                                <div class="layer">
                                    <h3>Tazvik</h3>
                                    <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatem?
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>



                    <div class="row2">
                        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                            <div class="campus-col r2">
                                <img src={Kush} />
                                <div class="layer">
                                    <h3>Kush Patel</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatem?
                                    </p>
                                </div>
                            </div>
                        </Tilt>


                        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                            <div class="campus-col r2">
                                <img src={Keshav} />
                                <div class="layer">
                                    <h3>Keshav Todi</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatem?
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                </div>



            </section >
        </div >
    )
}

export default Members

