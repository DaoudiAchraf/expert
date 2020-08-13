import React from 'react';
import './expertCart.scss';
import img from '../../icon/Capture.PNG';
import { Rate } from 'antd';


const ExpertCard = () => {
    return (
        <div className="expert">
            <div className="expert-infos">
                <h2 className="gray-color ml mt">2</h2>
                <div className="expert-image">
                    <img src={img} className="img"></img>
                </div>
                <div className="expert-details">
                    <h1 className="expert-name">Saida</h1>
                    <div className="expert-work-location">
                        <a href="#" className="expert-work">Expert mecanique</a>
                        <p>Localisation</p>
                        <h4>Fouchena Cité Amal</h4>
                    </div>

                    <Rate allowHalf defaultValue={4.5} />
                </div>

            </div>
            <div className="expert-profileBtn">
                <button className="expert-profile-button">
                    view profile
                </button>
            </div>
        </div>
    );
};

export default ExpertCard;
