import React from 'react';
import './AppointmentCard.css';
import moment from 'moment/moment.js';
import {useDispatch} from 'react-redux';
import {setReservationStatus} from '../../../actions/reservation-actions/actions';

const Appointmentcard = (props) => {
    const {_id,type,name,phone,date} = props.infos;

    const dispatch = useDispatch();

    const set_AppointmentStatus = (status)=>{
        alert(status);
        dispatch(setReservationStatus(_id,{status:status}));
     
    }

    return (
     <div className='appointmentCard'>
         
             <div className="appointment-infos">
                
             <p className="skill_type">{type}</p>
                    <div className="main_infos">
                        <p>
                            <span>Name </span>: {name}
                        </p>

                        <p>
                            <span>Date</span> : {moment(date).format('YYYY-MM-DD')}
                        </p>

                        <p>
                            <span>Time</span> : {new Date(date).getHours()}:{new Date(date).getMinutes()}
                        </p>

                        <p>
                            <span>Phone</span> : {phone}
                        </p>    
   
                    </div>
                       
             </div>
  

        <div className='controls'>
            <button onClick={()=>set_AppointmentStatus('accepted')} className="btn btn-success">Accept</button>
            <button onClick={()=>set_AppointmentStatus('rejected')} className="btn btn-danger">Decline</button>
            </div>
         
     </div>
    )
}


export default Appointmentcard;
