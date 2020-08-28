import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (

      <div className="nav-container">
        <nav>
 
          <ul >
            <li>A propos</li>

            <li>Nos Services</li>

            <li>Team</li>

            <li>Reviews</li> 

            <li>Contact</li>

            <button className="btn btn-primary">Demander assistance</button>
          </ul>

       
      </nav>
      </div>
  
    )
}

export default NavBar;
