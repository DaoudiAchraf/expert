import React,{useEffect} from 'react';
import Appointmentcard from '../../components/Expert-Appointments/appointmentCard/AppointmentCard';
import './AppointmentsPage.css';
import {connect,useSelector} from 'react-redux';
import { getAppointments } from '../../actions/reservation-actions/actions';

const Expert_Appointments = ({getAppointments}) => {
    
    useEffect(() => {
        getAppointments();
    },[]);

    const appointments = useSelector(state => state.reservationReducer.myReservations);
    if(appointments)
    console.log(appointments);

    return (
        <div>
            <div className="cards-container">
                {
                    appointments.map( appointment =>
                         <Appointmentcard key={appointment._id} infos={appointment}/> )

                }
                
            </div>
        </div>
    );
};


export default connect(null,{getAppointments})(Expert_Appointments);
