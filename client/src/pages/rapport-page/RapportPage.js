import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumb } from 'antd';
import img from '../../icon/img.png';
import InfoClient from '../../components/info-client/InfoClient';
import RapportCarInfo from '../../components/rapport-car-info/RapportCarInfo';
import FeuxPollution from '../../components/feuxPollution/FeuxPollution';
import ChassisEtSusspension from '../../components/chassisEtSuspension/chassisEtSuspension';
import Carrosserie from '../../components/Carrosserie/Carrosserie';
import InterieursVoiture from '../../components/InterieursVoiture/InterieursVoiture';
import RoueDirection from '../../components/RoueDirection/RoueDirection';
import Mecanique from '../../components/Mecanique/Mecanique';
import Electricite from '../../components/Electricite/Electricite';
import './RapportPage.scss';
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;


const RapportPage = () => {
    const [tab, setTab] = useState('1');
    const [cars, setCarts] = useState([]);
    const [currentForm, setCurrentForm] = useState('info-client');
    const infoClientSubmitBtn = useRef();
    const [rapportData, setRapportData] = useState({});
    const formListName = ['info-client', 'car-info', 'feux-pollution', 'chassis-susspension', 'carrosserie', 'interieurs-voitureForm', 'roue-direction', 'mecanique', 'electricite'];
    useEffect(() => {
        axios.get('https://private-anon-0a729253ca-carsapi1.apiary-mock.com/manufacturers?New%20item=').then((data) => {
            data.data.map((e, index) => {
                const obj = cars;
                obj.push(e.name);
                setCarts(obj);
            })
        });
    }, []);
    function callback(key) {
        console.log(key);
    }
    const prevPage = () => {
        let val = parseInt(tab);
        val > 1 && val--;
        setTab(val + '');
        console.log(tab);
    }
    const nextPage = () => {
        // infoClientSubmitBtn.current.handleClick
        let val = parseInt(tab);
        val < 9 && val++;
        setTab(val + '');
        console.log(tab);
    }


    return (
        <div className='rapportPage'>
            <div className="navigation">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Rapport</a>
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
                        </div>
                        <div className="diagno">
                            <p>azealeallsdlqld</p>
                        </div>
                    </div>
                    <div className="rapport-details">
                        <Tabs activeKey={tab} onChange={callback}>
                            <TabPane tab="Info Client" key="1">
                                <InfoClient nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} cars={cars} />
                            </TabPane>
                            <TabPane tab="Identifiants de véhicule" key="2">
                                <RapportCarInfo nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Feux Et Pollution" key="3">
                                <FeuxPollution nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Chassis Et Suspension" key="4">
                                <ChassisEtSusspension nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Carrosserie" key="5">
                                <Carrosserie nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Intérieurs voiture" key="6">
                                <InterieursVoiture nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Roue et Direction" key="7">
                                <RoueDirection nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Mécanique" key="8">
                                <Mecanique nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                            <TabPane tab="Electricité et équipements spéciaux" key="9">
                                <Electricite nextPage={nextPage} setRapportData={setRapportData} rapportData={rapportData} />
                            </TabPane>
                        </Tabs>
                        <div className="rapport_buttons">
                            <button onClick={prevPage}>prev</button>
                            <button form={formListName[parseInt(tab) - 1]} type='submit'>{tab != 9 ? 'Next' : 'Valid'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default RapportPage;
