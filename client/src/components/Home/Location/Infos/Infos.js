import React from 'react';
import './Infos.css';



const Infos = () => {
    return (
        <div className="location">

            <div className="item">
                <h1>Our Location</h1>

                <div className="bloc">
                    <i className="fas fa-map-marker-alt com"> </i>
                    <p className="p1">Residence Le Palace,Bloc A</p>
                </div>

                <div className="bloc">
                    <i className="fas fa-phone-alt com"></i>
                    <p className="p1">71 145 212</p>
                </div>

            </div>

            <div className="item bloc" id="social-media">
                <p className="p1">Check our social media for updates :</p>
                <i className="fab fa-facebook com"></i>
            </div>

        </div>
    )
}

export default Infos;
