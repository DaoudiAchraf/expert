import React from 'react';
import { Breadcrumb } from 'antd';
import './ExpertMissions.scss';
import img from '../../icon/img.png';

const ExpertMissions = () => {
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
                    <div className="mission-details">
                        <div className="mission-infos">
                            <div className="image_name">
                                <img src={img} alt="image" />
                                <div className="title_date">
                                    <h3>eazeaze</h3>
                                    <p>azeazezaez</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn valid-btn'>Valide</button>
                                <button className='btn decline-btn'>Decline</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                    <div className="mission-details">
                        <div className="mission-infos">
                            <div className="image_name">
                                <img src={img} alt="image" />
                                <div className="title_date">
                                    <h3>eazeaze</h3>
                                    <p>azeazezaez</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn valid-btn'>Valide</button>
                                <button className='btn decline-btn'>Decline</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                    <div className="mission-details">
                        <div className="mission-infos">
                            <div className="image_name">
                                <img src={img} alt="image" />
                                <div className="title_date">
                                    <h3>eazeaze</h3>
                                    <p>azeazezaez</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn valid-btn'>Valide</button>
                                <button className='btn decline-btn'>Decline</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                    <div className="mission-details">
                        <div className="mission-infos">
                            <div className="image_name">
                                <img src={img} alt="image" />
                                <div className="title_date">
                                    <h3>eazeaze</h3>
                                    <p>azeazezaez</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn valid-btn'>Valide</button>
                                <button className='btn decline-btn'>Decline</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                    <div className="mission-details">
                        <div className="mission-infos">
                            <div className="image_name">
                                <img src={img} alt="image" />
                                <div className="title_date">
                                    <h3>eazeaze</h3>
                                    <p>azeazezaez</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn valid-btn'>Valide</button>
                                <button className='btn decline-btn'>Decline</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ExpertMissions;
