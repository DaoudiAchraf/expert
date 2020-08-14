import React from 'react';
import './Intro.css';
import DateAndTimePickers  from './DatePicker/DatePicker';

const intro = () => {
    return (
        <div className="flexContainer" >
            <div className="introText">
            <h1 className="h1">Vous cherchez un expert</h1>
            <h1 className="h1"> pour votre voiture ?</h1>
       
            <div className="paragraph"> <p className="p">professionel assistance in the search of vehicules</p>
            <p className="p">by individual parametres and diagnostics</p></div>
           
            </div>
            <DateAndTimePickers></DateAndTimePickers>
        </div>
    )
}

export default intro;
