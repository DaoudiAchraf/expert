import React from 'react';
import './Notification.css';
import DropDown from './DropDown/DropDown';
import { useSelector } from 'react-redux';

const Notification = (props) => {

    const someone = useSelector(state => state.authReducer);

    // && someone.user.role === 'client'

    return (
          (someone.isLoggedIn)&&
                <DropDown />
         
    )
}


export default Notification
