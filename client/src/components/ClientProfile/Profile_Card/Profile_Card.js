import React, {useEffect} from 'react';
import "./Profile_Card.css";
import IMG from "../../../images/profile_img.jpg";
import {useDispatch,useSelector} from 'react-redux';


const Profile_Card = props => {

    //const {name,address,sexe,phoneNumber,vehicule} = props.profile ;

    const name="Daoudi Achref",address="Fouchana Cité prime",sexe="sexe",phoneNumber="phone",vehicule="voiture";

    const dispatch = useDispatch();
    useEffect(()=>{ 
            
    },[])
    return (
        <div className="profileCard__Layout">
            <div className="profile__tag"><span>mon profil</span></div>
         
            <div className="profile__infos">
                <img src={IMG} />
                <div className="profile__infos-details">
                    <p id="name-tag" >{name}</p>
                    <div className="blocs-layout">
                        
                        <div id="bloc-tags">
                            
                            <span>address <br/> </span> 
                            <span>sexe <br/> </span> 
                            <span>phone number <br/> </span>
                            <span>véhicule <br/> </span> 
                        </div>
                        <div id="bloc-answers">
                            <span>: {address} <br/> </span>
                            <span>: {sexe} <br/></span>
                            <span>: {phoneNumber} <br/></span>
                            <span>: {vehicule} <br/> </span>
                        
                        </div>
                    </div>
                 
                    {
                        props.canEdit?
                            <button className="profileCard__item-btn">MODIFIER MON PROFIL</button>
                        :null
                    }
                    
                </div>
                
                <div className="card__line">
                    <hr/>
                </div>
                
                
            </div>
            
        </div>
    )
}



export default Profile_Card
