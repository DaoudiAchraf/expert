import React from 'react';
import './Intro.css';
import LocationDatePicker  from './Location_Date_Picker/LocationDatePicker';


const intro = () => {
    return (


        <div className="intro-container" >
                    
                <div className="intro">
                    <div className="introText">

                    <h1>Vous cherchez un expert <br/> pour votre voiture ?</h1>
                    <div className="paragraph">
                        <p>professionel assistance in the search of vehicules
                        <br/>by individual parametres and diagnostics</p>
                    </div>

                    </div>
                    
                <LocationDatePicker/>

                </div>
        </div>

    )
}

export default intro;
