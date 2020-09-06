import React from 'react';
import './AppointmentCard.css';


const Appointmentcard = (props) => {
    const {type,name,phone,date} = props.infos;

    const dte = new Date(date);
    //alert(dte.toLocaleTimeString());
    console.log();

    return (
     <div className='appointmentCard'>
         
             <div className="appointment-infos">
                
             <p className="skill_type">Visite Generale</p>
                    <div>
                        <p>
                            Type: {type}
                        </p>

                        <p>
                            Name: {name}
                        </p>

                        <p>
                            Date: {date}
                        </p>

                        <p>
                            Time: {new Date(date).getHours()}:{new Date(date).getMinutes()}
                        </p>

                        <p>
                            Phone: {phone}
                        </p>    
                            
                        
                       
                    </div>
                       
             </div>
  

        <div className='controls'>
            <button className="btn btn-outline-success btn_accept">Accept</button>
            <button className="btn btn-outline-danger btn_decline">Decline</button>
            </div>
         
     </div>
    )
}



export default Appointmentcard;
