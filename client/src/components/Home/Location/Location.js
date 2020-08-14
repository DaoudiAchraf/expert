import React from 'react';
import './Location.css';
import Mapi from './Infos/Map';
import Infos from './Infos/Infos';

const Location = () => {
    return (
        <div className="flex-container">
          
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
