import React from 'react';
import './Contact.css';
import Card from './Card/Card';

const Contact = () => {
    return (
        <div className="contact-container">


            <div className="contact-box">
                <h3>Vous voulez acheter une nouvelle Voiture ?</h3>
                <h3> Nous avons les meilleurs experts pour vous</h3>
                <h3> aider !</h3>
                <Card className="card" />
            </div>


        </div>
    )
}

export default Contact;
