import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
    return (

        // <div className="contac">
           
        <section id="contact" class="contact-us">
            <h1>Contact Us</h1>
                <p>Wanna get in touch?? Fill the form below!! 😊</p>
            <div class="roww">
                <div class="contact-col">
                    <form class="forrm" method="post" action="contact-form-handler.php">
                        <input type="text" class="t1" name="name" placeholder="Enter your name" required />
                        <input type="email" class="t1" name="email" placeholder="Enter email address" required />
                        <input type="text" class="t1" name="subject" placeholder="Enter your subject" required />
                        <textarea rows="8" name="message" placeholder="Message" required></textarea>
                        <button type="submit" class="hero-btn red-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        // </div>


    )
}

export default Contact