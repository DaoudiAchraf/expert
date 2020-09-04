import React,{useState} from 'react';
import './Profile.css';
import SelectBar from './SelectBar/SelectBar';
import img from '../../images/profile_img.jpg';
import {useParams} from 'react-router';


const Profile = props => {

   const [state, setstate] = useState(null);
   
    const obj={bio:'',
    certifications:['er','rdr'],
    location:'',
    speciality:'',
    user:{login:''}}

    let {certifications,location,speciality,user} = obj;

   
    console.log(props.profiles);
    const {id} = useParams();
    const current_profile = props.profiles.filter( profile=> profile._id === id);    
    
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
                        <p className="skill_type">{current_profile.map(el=>el.speciality)}</p>
                        <p className="expert_name">{current_profile.map(el=>el.user.login)} </p>
                        <p>Rating</p>
                        <p className="address">Address :</p>
                        <p className="expert_address">{current_profile.map(el=>el.location.name)}</p>
                        
                       
                    </div>
                </div>

        </div>

        
        <div className="seconde_row">
            <hr></hr>
            <div className="lower-infos">
                <p className="expert_career"> Professional statement</p>
                <div className="inner_career">
                    <p>{current_profile.map(el=>el.bio)}</p>
                </div>
          

                <p className="expert_career">Certifications</p>
                <div className="inner_career">
                    <p>
                    {current_profile.map(el=>el.certifications)}
                        
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


export default Profile;

