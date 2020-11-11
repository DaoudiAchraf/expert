import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './MissionsDonePage.scss';
import img from '../../icon/img.png';
import moment from 'moment/moment.js';
import { getMissions } from '../../actions/reservation-actions/actions';
import { useDispatch, useSelector } from "react-redux";

const MissionsDonePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMissions());
    }, []);

    const missions = useSelector(state => state.reservationReducer.acceptedMissions);
    console.log('missions', missions);

    const missionsInProgress = missions.filter(mission => mission.status === 'accepted');

    const missionsHistory = missions.filter(mission => mission.status === 'report');

    const handleClick = (e, mission) => {
        console.log(e, 'azeazeazeaze', mission)
        localStorage.setItem('mission', JSON.stringify(mission));
    }
    return (
        <div className="missionsDonePage">
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
                        <h6>Mes missions encours</h6>
                    </div>
                    {missionsInProgress.length === 0 ? <h5 style={{ textAlign: 'center' }}>Aucune mission trouvé .</h5> :
                        missionsInProgress.map((mission, index) =>
                            <div key={index} className="mission-details">
                                <div className="mission-infos">
                                    <div className="image_name">
                                        <img src={img} alt="image" />
                                        <div className="title_date">
                                            <h3>{mission.name}</h3>
                                            <p>{moment(new Date(mission.date)).format('DD MMMM YYYY')} - {moment(new Date(mission.date)).format('HH.mm')} </p>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <Link to={{
                                            pathname: '/rapport/' + mission._id,
                                            mission: mission
                                        }} onClick={(e) => handleClick(e, mission)} className='btn'>Remplir rapport</Link>
                                    </div>
                                </div>
                                <div className="diagno">
                                    <p>{mission.type}</p>
                                </div>
                            </div>
                        )}


                </div>
            </div>



            <div className="missions">

                <div className="missions-card">
                    <div className="title">
                        <h6>Mon historique de missions</h6>
                    </div>
                    {missionsHistory.length === 0 ? <h5 style={{ textAlign: 'center' }}>l'historique est vide .</h5> :
                        missionsHistory.map((mission, index) =>
                            <div className="mission-details">
                                <div className="mission-infos">
                                    <div className="image_name">
                                        <img src={img} alt="image" />
                                        <div className="title_date">
                                            <h3>{mission.name}</h3>
                                            <p>{moment(new Date(mission.date)).format('DD MMMM YYYY')} - {moment(new Date(mission.date)).format('HH.mm')}</p>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button className='btn'>Revoir rapport</button>
                                    </div>
                                </div>
                                <div className="diagno">
                                    <p>{mission.type}</p>
                                </div>
                            </div>
                        )}

                </div>
            </div>
        </div>
    );
};



export default MissionsDonePage;
