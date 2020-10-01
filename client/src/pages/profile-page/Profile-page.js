import React ,{useEffect}from 'react';
import './Profile-page.css';
import Profile from '../../components/Profile/Profile';
import Profile_Review from '../../components/Profile-Review/Profile_Review';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {getProfileById} from '../../actions/profile-actions/actions';
import Reservation from '../../components/reservation/Reservation';
import {useParams} from 'react-router';


const ProfilePage = ({getProfileById}) => {
    
    const profileID = useParams().id;

     useEffect(() => {
        getProfileById(profileID);
    }, []);

    const profile = useSelector(state => state.profileReducer.profile);
    
    return (

        <div className="profile-page" >

            <div className="profile-container">
                <div className="profile">
                    <div className="overview">
                        <Profile profile={profile}/> 
                    </div>
                    <Profile_Review />
                </div>
                
                <Reservation/>
                
            </div>
        </div>

    )
}

export default connect(null,{getProfileById}) (ProfilePage);
