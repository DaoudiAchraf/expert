import React, { useState } from 'react';
import './NavBar.css';
import SignUpPage from "../../../pages/signup-page/SignUpPage";
import Notifications from '../../Notifications/Notification';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => {
  const [showmodel, setShowmodel] = useState(false);
  const history = useHistory()
  const handlclick = () => {
    props.isLoggedIn ? history.push('/search') : setShowmodel(true);
  }
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (

    <div className="nav-container">
      <nav>

        <ul>
          <Link to='' style={{ color: 'black' }}>
            <li >A propos</li>
          </Link>
          <Link to='' style={{ color: 'black' }}>
            <li onClick={() => scrollToRef(props.refs.serviceRef)}>
              Nos Services
              </li>
          </Link>

          <Link to='' style={{ color: 'black' }}>
            <li>Team</li>
          </Link>

          <Link to='' style={{ color: 'black' }}>
            <li>Reviews</li>
          </Link>

          <Link to='' style={{ color: 'black' }}>
            <li onClick={() => scrollToRef(props.refs.contactRef)}>
              Contact
              </li>
          </Link>
          <button onClick={handlclick} className="btn btn-primary">Demander assistance</button>
          <Notifications />
        </ul>


      </nav>
      <SignUpPage setShowmodel={setShowmodel} showmodel={showmodel} />
    </div>

  )
}
const mapStateToProps = reduxStore => {
  return {
    isLoggedIn: reduxStore.authReducer.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(NavBar);
