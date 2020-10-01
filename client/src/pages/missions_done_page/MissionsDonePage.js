import React from 'react';
import { Breadcrumb } from 'antd';
import './MissionsDonePage.scss';
import img from '../../icon/img.png';

const MissionsDonePage = () => {
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
                    {/* adheya mta3 el map */}
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
                                <button className='btn'>Remplir rapport</button>
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
                                <button className='btn'>Remplir rapport</button>
                            </div>
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="missions">

                <div className="missions-card">
                    <div className="title">
                        <h6>Mon hestorique de missions</h6>
                    </div>
                    {/* adheya mta3 el map */}
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
                                <button className='btn'>Revoir rapport</button>
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
                                <button className='btn'>Revoir rapport</button>
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
                                <button className='btn'>Revoir rapport</button>
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



export default MissionsDonePage;
