import React from 'react';
import './SelectBar.css';
import { EditTwoTone }from '@ant-design/icons';

const SelectBar = props => {
    return (
        <div className="bar-container">
     
             <h5>OverView</h5>
    
              <h5>Expert Satisfaction Reviews</h5>

        
              <i class="fas fa-user-edit fa-2x" onClick={props.setEditMode}></i>

             
        </div>
    )
}

export default SelectBar;
