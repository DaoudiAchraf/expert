import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumb } from 'antd';
import img from '../../icon/img.png';
import InfoClient from '../../components/info-client/InfoClient';
import RapportCarInfo from '../../components/rapport-car-info/RapportCarInfo';
import './RapportPage.scss';
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;


const RapportPage = () => {
    const [tab, setTab] = useState('2');
    const [cars, setCarts] = useState([]);
    const [currentForm, setCurrentForm] = useState('info-client');
    const infoClientSubmitBtn = useRef();
    const [rapportData, setRapportData] = useState({});
    const formListName = ['info-client', 'car-info'];
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
                                <InfoClient nextPage={nextPage} infoClientSubmitBtn={infoClientSubmitBtn} setRapportData={setRapportData} rapportData={rapportData} cars={cars} />
                            </TabPane>
                            <TabPane tab="Identifiants de véhicule" key="2">
                                <RapportCarInfo infoClientSubmitBtn={infoClientSubmitBtn} setRapportData={setRapportData} rapportData={rapportData} cars={cars} />
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="4">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="5">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="6">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="7">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="8">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Tab 3" key="9">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                        <div className="rapport_buttons">
                            <button onClick={prevPage}>prev</button>
                            <button form={formListName[parseInt(tab) - 1]} type='submit'>next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default RapportPage;
