import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
  
        <nav className="navbar navbar-expand-lg navbar-light  container">
 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">A Propos<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nos Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

            <li className="nav-item">
            <button className="btn btn-primary ">Demander assistance</button>
            </li>

          </ul>
          <span className="navbar-text">
            Login
          </span>
        </div>
      </nav>

    )
}

export default NavBar;
