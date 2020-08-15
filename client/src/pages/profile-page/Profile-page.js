import React from 'react';
import './Profile-page.css';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
    return (
        <div className="profile">
           
           
            <div className="overview">
                <h3>Home/Map Search</h3>
                <Profile/>
            </div>
        </div>
    )
}

export default ProfilePage;
