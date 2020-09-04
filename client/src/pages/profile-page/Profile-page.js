import React ,{useEffect}from 'react';
import './Profile-page.css';
import Profile from '../../components/Profile/Profile';
import Profile_Review from '../../components/Profile-Review/Profile_Review';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profile-actions/actions';
import Reservation from '../../components/reservation/Reservation';



const ProfilePage = ({getProfiles}) => {
    
     useEffect(() => {
        getProfiles();
    }, []);

    const profiles = useSelector(state => state.profileReducer.profiles);
   console.log('proos',profiles);

    return (
        <div className="profile-page">
            <div className="profile">
                <div className="overview">
                    <h3>Home/Map Search</h3>
                    <Profile profiles={profiles}/>
                </div>
                <Reservation/>
            </div>

            <Profile_Review />
        </div>

    )
}

export default connect(null,{getProfiles}) (ProfilePage);
