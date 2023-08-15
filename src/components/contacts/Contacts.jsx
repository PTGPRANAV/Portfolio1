import React, {useRef} from "react";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {GrFacebook} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs";
import "./Contact.css";
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u02s66h', 'template_m4tiqwk', form.current, 'RuUMWxIYFjCYkrPrj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <section className="container" id="contact">
            <h1 className="gobli center-text">Contact me.</h1>
            <div className="contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_options-icon"/>
                        <h4>Email</h4>
                        <h5>pranavdaundkar13<br/>@gmailcom</h5>
                        <a href="mailto:pranavdaundkar13@gmail.com" target="_blank">Send me a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_options-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+91 8329268591</h5>
                        <a href="https://api.whatsapp.com/send?phone+=918329269591" target="_blank">Send me a message</a>
                    </article>
                    
                </div>
                <div className="contact_options">
                    <article className="contact_option">
                        <GrFacebook className="contact_options-icon"/>
                        <h4>Facebook</h4>
                        <h5>Pranav Daundkar</h5>
                        <a href="https://www.facebook.com/profile.php?id=100075450469630" target="_blank">Send me a message</a>
                    </article>
                    <article className="contact_option">
                        <BsInstagram/>
                        <h4>instagram</h4>
                        <h5>p.t.g_pranav</h5>
                        <a href="https://www.instagram.com/p.t.g_pranav/" target="_blank">Send me a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;