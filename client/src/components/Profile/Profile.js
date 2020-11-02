import React, { useState} from 'react';
import './Profile.css';
import SelectBar from './SelectBar/SelectBar';
import img from '../../images/profile_img.jpg';
import userIcon from '../../images/user.png';
import certificationIcon from '../../images/waranty.png';
import { v4 as uuidv4 } from 'uuid';
import ProfileEditor from '../ProfileEditor_Modal/EditorModal';
import { useSelector } from 'react-redux';

const Profile = props => {

   
    let current_profile = {
        bio: '',
        certifications: [],
        location: '',
        speciality: '',
        user: { login: '' }
    }
    if (props.profile)
        current_profile = props.profile;

    let { certifications, location, speciality, user, bio } = current_profile;

 

    const [state,setState] = useState({
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      });


      const loggedUser= useSelector(state => state.authReducer.user); 
      let role ="";
      if(loggedUser)
          role = loggedUser.role;
      
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
                            { 
                               (role === 'expert' && user._id === loggedUser._id) &&
                               <div>
                                   <button onClick={()=>setState({visible:true})} className="profileCard__item-btn">MODIFIER MON PROFIL</button>
                                   <ProfileEditor state={state} setState={setState}/>
                               </div>
                            }
                           
                        </div>
                    
                    </div>
                    

            </div> 

             <div className="seconde_row">
                    <hr/>
                    <div className="lower-infos">
                        <div className="biography">
                            <img className="icon" src={userIcon}></img>
                            <p className="expert_career"> Professional statement :</p>
                            <div className="inner_career">
                                <p>{bio}</p>
                            </div>
                        </div>

                        <div className="certifis">
                            <img className="icon" src={certificationIcon}></img>
                            <p className="expert_career">Certifications :</p>
                            <div className="inner_career">
                                <p>
                                    {certifications.map(certif =>
                                        <span key={uuidv4()}>{"-" + certif} <br /></span>
                                    )}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                                                               
                                                            
            </div>
        </div>
    )
}

export default Profile;

