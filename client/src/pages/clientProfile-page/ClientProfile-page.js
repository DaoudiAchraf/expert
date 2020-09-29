import React,{useEffect} from 'react';
import './ClientProfile-page.css';
import Profile_Card from '../../components/ClientProfile/Profile_Card/Profile_Card';
import History_Card from '../../components/ClientProfile/History_Card/History_Card';
import {useDispatch,useSelector} from 'react-redux';
import './ClientProfile-page.css';

const ClientProfile = props => {
    return (
        <div className="clientProfile__container">

            <p>Home / Mon Compte</p>
            <div className="Card__container">
                <Profile_Card />
            </div>

            <div className="Card__container">
                <History_Card />
            </div>
           
            
        </div>
    )
}


export default ClientProfile
