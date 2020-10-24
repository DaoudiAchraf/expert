import React from 'react';
import './Location.css';
import Mapi from './Infos/Map';
import Infos from './Infos/Infos';

const Location = (props) => {
    return (
      <div ref={props.Ref} className="flex-container">
          
          <div className="flex-item">
              <Infos/>
          </div>
            
          
           <div className="flex-item">
               <Mapi/>
           </div>
            
        </div>

       
    )
}

export default Location;
