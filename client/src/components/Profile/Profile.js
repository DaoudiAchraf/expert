import React,{useState} from 'react';
import './Profile.css';
import SelectBar from './SelectBar/SelectBar';
import img from '../../images/profile_img.jpg';
import userIcon from '../../images/user.png';
import certificationIcon from '../../images/waranty.png';
import { v4 as uuidv4 } from 'uuid';
import CSSTransition from 'react-transition-group/CSSTransition';
import ProfileEditor from './Profile-Editor/ProfileEditor';

const Profile = props => {
   
    let current_profile={
    bio:'',
    certifications:[],
    location:'',
    speciality:'',
    user:{login:''}}

    if(props.profile)
        current_profile = props.profile;

    let {certifications,location,speciality,user,bio} = current_profile;

    const [edit , setEdit] = useState(false);

    const isEdit = ()=>
    {
       // alert('wrok');
        setEdit(!edit);
    }
    
    return (
        <div className="profile-infos">

       
            <div className="infos-header">
                    <SelectBar setEditMode={isEdit}/>
                </div>
            <div className="profile_overview">
            
            <CSSTransition in={edit} timeout={300}
                           mountOnEnter unmountOnExit 
                           classNames="editPanel">  
            {
                state=>( <ProfileEditor/>)
                
                
            }
                
            </CSSTransition>

            {
              
                     <CSSTransition in={!edit} timeout={800}
                           mountOnEnter unmountOnExit 
                           classNames="editPanel">  
            {
                state=>( <div>
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
                   {certifications.map(certif=>
                     <span key={uuidv4()}>{"-"+certif} <br/></span>
                   )}
            
                    </p> 
                </div>
                </div>
             
            </div>
    
        </div>
                    </div>)
                
                
            }
                
            </CSSTransition>
                    
                
            }
            {/* kks */}
        </div>
            
        </div>
    )
}


export default Profile;

