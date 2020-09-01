import React from 'react';
import './Profile.css';
import SelectBar from './SelectBar/SelectBar';
import img from '../../images/profile_img.jpg';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';


const Profile = () => {

    const {id} = useParams();

    const profiles =  useSelector(state => state.profileReducer.profiles);

    const current_profile = profiles.filter( profile=> profile._id === id)[0];
   
    const {bio,certifications,location,speciality,user} = current_profile;
    
    return (
        <div className="profile-infos">

       
            <div className="infos-header">
                    <SelectBar/>
                </div>
            <div className="profile_overview">
            <div className="first_row">
                <div className="upper-infos">
                    <img src={img}></img>
                    <div>
                        <p className="skill_type">{speciality}</p>
                        <p className="expert_name">{user.login} </p>
                        <p>Rating</p>
                        <p className="address">Address :</p>
                        <p className="expert_address">{location.name}</p>
                    </div>
                </div>

        </div>

        
        <div className="seconde_row">
            <hr></hr>
            <div className="lower-infos">
                <p className="expert_career"> Professional statement</p>
                <div className="inner_career">
                    <p>{bio}</p>
                </div>
          

                <p className="expert_career">Certifications</p>
                <div className="inner_career">
                    <p>
                        {
                            certifications.map(certif=>
                               certif)
                            
                        }
                        
                    </p> 
                </div>
             
            </div>
    
        </div>

        </div>
            
           

            {/* <div className="lower-infos">
                
            </div> */}
        </div>
    )
}

// const mapStateToProps = state =>({
//     profile: state.profile
// });
export default (Profile);
// connect(mapStateToProps,{getProfiles}) 
