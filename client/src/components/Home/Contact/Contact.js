import React from 'react';
import './Contact.css';
import Card from './Card/Card';
import img from '../../../images/berlingo.PNG';

const Contact = (props) => {
    return (
        <div ref={props.Ref} className="contact-container">
                
                <img src={img} />

                <div className="contact-box">
                    <h3>
                        Vous voulez acheter une nouvelle Voiture ?<br/>
                        Nous avons les meilleurs experts pour vous aider !
                    </h3>
                   <Card className="card"/> 
                </div>
     
        </div>
    )
}

export default Contact;
