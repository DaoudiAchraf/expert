import React from 'react';
import './Notification.css';
import DropDown from './DropDown/DropDown';
import { useSelector } from 'react-redux';

const Notification = (props) => {

    const someone = useSelector(state => state.authReducer);

    localStorage.clear();

    return (
          (someone.isLoggedIn && someone.user.role === 'client')&&
                <DropDown />
         
    )
}


export default Notification
