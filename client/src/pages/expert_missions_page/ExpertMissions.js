import React,{useEffect,useState} from 'react';
import { Breadcrumb } from 'antd';
import './ExpertMissions.scss';
import img from '../../icon/img.png';
import { getAppointments,setReservationStatus } from '../../actions/reservation-actions/actions';
import moment from 'moment/moment.js';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const ExpertMissions = () => {

    const [missions,setMissions] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAppointments());
    }, []);

    let myMissions = useSelector(state => state.reservationReducer.myReservations);
    console.log(":m",myMissions);

    useEffect(()=>{
        setMissions(myMissions);
    },[myMissions]);
    
    console.log("mission",missions);

    const set_AppointmentStatus = (_id,status)=>
    {
        dispatch(setReservationStatus(_id,{status:status}));
        const myMissions = missions.filter(mission => mission._id != _id);
        setMissions(myMissions);
    }

    return (
        <div className='missionsPage'>
            <div className="navigation">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Missions</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="missions">
                <div className="missions-card">
                    <div className="title">
                        <h6>Mes demandes de missions</h6>
                    </div>
                    {   
                        missions.length === 0 ? <h5>Aucune mission trouvé ..</h5>:
                        missions.map((mission,index)=>{
                          return( 
                       
                        <div key={index} className="mission-details">
                            <div className="mission-infos">
                                <div className="image_name">
                                    <Link to={"/client/"+mission.client}><img src={img} alt="image" /></Link>
                                    <div className="title_date">
                                        <Link to={"/client/"+mission.client}><h3>{mission.name}</h3></Link>
                                        <p>{moment(new Date(mission.date)).format('DD MMMM YYYY')} - {moment(new Date(mission.date)).format('HH.mm')} </p>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button onClick={()=>set_AppointmentStatus(mission._id,'accepted')}
                                     className='btn valid-btn'>Valider</button>
            
                                    <button onClick={()=>set_AppointmentStatus(mission._id,'rejected')}
                                    className='btn decline-btn'>Decliner</button>
                                </div>
                            </div>
                            <div className="diagno">
                                <p>{mission.type}</p>
                            </div>
                        </div>)
                        })
            
                    }
                  
            
                </div>
            </div>
        </div>
    );
};


export default ExpertMissions;
