import React,{useEffect} from 'react';
import './ClientProfile-page.css';
import Profile_Card from '../../components/ClientProfile/Profile_Card/Profile_Card';
import History_Card from '../../components/ClientProfile/History_Card/History_Card';
import { getClientHistory } from '../../actions/reservation-actions/actions';
import {useDispatch,useSelector} from 'react-redux';
import './ClientProfile-page.css';
import { useParams } from 'react-router';

const ClientProfile = props => {
  
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getClientHistory());
    },[]);

    const history = useSelector(state => state.reservationReducer.acceptedMissions);

    const clientID = useParams().id;

    const loggedUser= useSelector(state => state.authReducer.user); 
    
    let profileOwner = false;
    if (loggedUser)
        if(loggedUser._id === clientID)
            profileOwner = true;
    
    return (
        <div className="clientProfile__container">

            <p>Home / Mon Compte</p>
            <div className="Card__container">
                <Profile_Card canEdit={profileOwner}/>
            </div>

            {profileOwner?
                <div className="Card__container">
                    <History_Card history={history}/>
                </div>:null
            }
           
            
        </div>
    )
}


export default ClientProfile
