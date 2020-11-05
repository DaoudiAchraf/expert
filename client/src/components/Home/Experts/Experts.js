import React from 'react';
import Glider from './Glider/Glider';
import icon from '../../../images/iconPonct.png';

import './Experts.css'

const Experts = (props) => {
    return (
        <div ref={props.Ref} className="expertDiv">
            <div className="experDiv__header">
                <img style={{float:"left",marginRight:"-80px"}} src={icon}/>
                <h3 >Nos Meilleurs Experts </h3>
            </div>
  
            <div className="sliderDiv">
                <Glider />
            </div>

        </div>

    )
}

export default Experts;
