import React, { useState } from 'react';
import './NavBar.css';
import SignUpPage from "../../../pages/signup-page/SignUpPage";
import Notifications from '../../Notifications/Notification';
import { connect } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
const { RangePicker } = TimePicker;

const NavBar = (props) => {
  const [showmodel, setShowmodel] = useState(false);
  const history = useHistory()
  const handlclick = () => {
    props.isLoggedIn ? history.push('/search') : setShowmodel(true);
  }

  const history = useHistory();

  const currentURL = useLocation().pathname;

  const scrollToRef = (ref) => {
    if (currentURL != '/') {
      history.push('/');
      setTimeout(() => {
        window.scrollTo(0, ref.current.offsetTop);
      }, 1000);
    }

    else
      window.scrollTo(0, ref.current.offsetTop);
  }




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

          {
            !(currentURL === '/missions') &&
            <Notifications />
          }

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
