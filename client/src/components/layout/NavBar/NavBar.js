import React, { useState } from 'react';
import './NavBar.css';
import SignUpPage from "../../../pages/signup-page/SignUpPage";
import { TimePicker } from 'antd2';
import Notifications from '../../Notifications/Notification';

const { RangePicker } = TimePicker;

const NavBar = () => {
  const [showmodel, setShowmodel] = useState(false);
  const handlclick = () => {
    setShowmodel(true);
  }

  return (

    <div className="nav-container">
      <nav>

        <ul >
          <li>A propos</li>

          <li>Nos Services</li>

          <li>Team</li>

          <li>Reviews</li>

          <li>Contact</li>

          <button onClick={handlclick} className="btn btn-primary">Demander assistance</button>

          <Notifications />
        </ul>


      </nav>
      <SignUpPage setShowmodel={setShowmodel} showmodel={showmodel} />
    </div>

  )
}

export default NavBar;
