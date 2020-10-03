import React, { useState, useRef } from "react";
import { Button, Typography, Modal, Steps, Carousel, Radio, Collapse, TimePicker, Checkbox } from "antd";

import WrappedSignupForm from "../signup-form/SignupForm";
import Profile_builder from "../Profile-Builder/Profile-builder";
import { createProfile } from '../../actions/profile-actions/actions';
import { connect } from "react-redux";
import moment from 'moment';

import './Expertcaro.scss';
const { Panel } = Collapse;
const Expertcaro = props => {
    const [expertDetails, setUserExpertDetails] = useState({});
    const refsigntupexpert = useRef();
    const [nextstep, setNextstep] = useState(0);
    const [mondayClosed, setMondayClosed] = useState(false);
    const [tuesdayClosed, setTuesdayClosed] = useState(false);
    const [wednesdayClosed, setWednesdayClosed] = useState(false);
    const [thursdayClosed, setThursdayClosed] = useState(false);
    const [fridayClosed, setFridayClosed] = useState(false);
    const [saturdayClosed, setSaturdayClosed] = useState(false);
    const [sundayClosed, setSundayClosed] = useState(false);
    const [daysTime, setDaysTime] = useState({
        'mondayStart': '',
        'mondayEnd': '',
        'tuesdayStart': '',
        'tuesdayEnd': '',
        'wednesdayStart': '',
        'wednesdayEnd': '',
        'thursdayStart': '',
        'thursdayEnd': '',
        'fridayStart': '',
        'fridayEnd': '',
        'saturdayStart': '',
        'saturdayEnd': '',
        'sundayStart': '',
        'sundayEnd': ''
    });
    const { Step } = Steps;
    const handlesignupexpert = (e) => {
        e.preventDefault();
        console.log('lena');
        setNextstep(nextstep + 1);
        refsigntupexpert.current.next();
        props.setProfileExpert(true);
    }
    const onChange = (value, timeString, day) => {
        const obj = daysTime;
        console.log(value, timeString)
        switch (day) {
            case 'mondayStart':
                obj.mondayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'mondayEnd':
                obj.mondayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'tuesdayStart':
                obj.tuesdayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'tuesdayEnd':
                obj.tuesdayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'wednesdayStart':
                obj.wednesdayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'wednesdayEnd':
                obj.wednesdayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'thursdayStart':
                obj.thursdayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'thursdayEnd':
                obj.thursdayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'fridayStart':
                obj.fridayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'fridayEnd':
                obj.fridayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'saturdayStart':
                obj.saturdayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'saturdayEnd':
                obj.saturdayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'sundayStart':
                obj.sundayStart = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;
            case 'sundayEnd':
                obj.sundayEnd = moment(value).format("HH:mm");
                setDaysTime(obj);
                console.log(daysTime);
                return;

        }
    }
    const closedMonday = e => {
        e.target.checked ? setMondayClosed(true) : setMondayClosed(false);
    }
    const closedTuesday = e => {
        e.target.checked ? setTuesdayClosed(true) : setTuesdayClosed(false);
    }
    const closedWednesday = e => {
        e.target.checked ? setWednesdayClosed(true) : setWednesdayClosed(false);
    }
    const closedThursday = e => {
        e.target.checked ? setThursdayClosed(true) : setThursdayClosed(false);
    }
    const closedFriday = e => {
        e.target.checked ? setFridayClosed(true) : setFridayClosed(false);
    }
    const closedSaturday = e => {
        e.target.checked ? setSaturdayClosed(true) : setSaturdayClosed(false);
    }
    const closedSunday = e => {
        e.target.checked ? setSundayClosed(true) : setSundayClosed(false);
    }

    const finalysignupExpert = () => {
        if (((daysTime.mondayStart == "" || daysTime.mondayEnd == "") && !mondayClosed) || ((daysTime.tuesdayStart == "" || daysTime.tuesdayEnd == "") && !tuesdayClosed) || ((daysTime.wednesdayStart == "" || daysTime.wednesdayEnd == "") && !wednesdayClosed) || ((daysTime.thursdayStart == ""
            || daysTime.thursdayEnd == "") && !thursdayClosed) || ((daysTime.fridayStart == "" || daysTime.fridayEnd == "") && !fridayClosed) || ((daysTime.saturdayStart == "" || daysTime.saturdayEnd == "") && !saturdayClosed) || ((daysTime.sundayStart == "" || daysTime.sundayEnd == "") && !sundayClosed)) {
            console.log("5rit fih");
            return;
        }
        const daysdispo = {
            'monday': mondayClosed ? false : [daysTime.mondayStart, daysTime.mondayEnd],
            'tuesday': tuesdayClosed ? false : [daysTime.tuesdayStart, daysTime.tuesdayEnd],
            'wednesday': wednesdayClosed ? false : [daysTime.wednesdayStart, daysTime.wednesdayEnd],
            'thursday': thursdayClosed ? false : [daysTime.thursdayStart, daysTime.thursdayEnd],
            'friday': fridayClosed ? false : [daysTime.fridayStart, daysTime.fridayEnd],
            'saturday': saturdayClosed ? false : [daysTime.saturdayStart, daysTime.saturdayEnd],
            'sunday': sundayClosed ? false : [daysTime.sundayStart, daysTime.sundayEnd]
        }
        console.log(expertDetails);
        const obj = {
            ...expertDetails,
            dispo: daysdispo
        }
        console.log(obj);
        props.createProfile(obj);
        props.setProfileExpert(false);
        props.setShowmodel(false);
    }

    return (
        <div>
            <Carousel dots={false} ref={refsigntupexpert}>
                <div className="signup-page">
                    <Typography.Title className="title">Sign up</Typography.Title>
                    <div className="content">
                        <WrappedSignupForm signupexpert={props.signupexpert} refsigntupexpert={refsigntupexpert} setNextstep={setNextstep} nextstep={nextstep} handle={handlesignupexpert} signupExpert={props.signupExpert} signup={props.signup} />
                    </div>
                </div>
                <div className="second-page">
                    <Typography.Title className="title">Profile</Typography.Title>
                    <Profile_builder cars={props.cars} setNextstep={setNextstep} nextstep={nextstep} refsigntupexpert={refsigntupexpert} setShowmodel={props.setShowmodel} profileExpert={props.profileExpert} setProfileExpert={props.setProfileExpert} setUserExpertDetails={setUserExpertDetails} />
                </div>
                <div className="signup-page">
                    <div className="dispo">
                        <div className="day">
                            <div className="tag">Monday</div>
                            <div className="horaire">
                                <TimePicker disabled={mondayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'mondayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={mondayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'mondayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedMonday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Tuesday</div>
                            <div className="horaire">
                                <TimePicker disabled={tuesdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'tuesdayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={tuesdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'tuesdayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedTuesday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Wednesday</div>
                            <div className="horaire">
                                <TimePicker disabled={wednesdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'wednesdayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={wednesdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'wednesdayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedWednesday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Thursday</div>
                            <div className="horaire">
                                <TimePicker disabled={thursdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'thursdayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={thursdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'thursdayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedThursday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Friday</div>
                            <div className="horaire">
                                <TimePicker disabled={fridayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'fridayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={fridayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'fridayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedFriday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Saturday</div>
                            <div className="horaire">
                                <TimePicker disabled={saturdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'saturdayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={saturdayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'saturdayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedSaturday}>closed</Checkbox>
                            </div>
                        </div>
                        <div className="day">
                            <div className="tag">Sunday</div>
                            <div className="horaire">
                                <TimePicker disabled={sundayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'sundayStart')} format={'HH:mm'} placeholder="start time" />
                                <TimePicker disabled={sundayClosed} onChange={(par1, par2, day) => onChange(par1, par2, 'sundayEnd')} format={'HH:mm'} placeholder="end time" />
                            </div>
                            <div className="closedOrNot">
                                <Checkbox onChange={closedSunday}>closed</Checkbox>
                            </div>
                        </div>
                        <Button onClick={finalysignupExpert} size={'large'} type="primary" className="nextBtn">
                            Sing up
                        </Button>
                    </div>
                </div>
            </Carousel>
            <Steps className="setps" current={nextstep}>
                <Step />
                <Step />
                <Step />
            </Steps>
        </div>
    );
};


export default connect(null, { createProfile })(Expertcaro);
