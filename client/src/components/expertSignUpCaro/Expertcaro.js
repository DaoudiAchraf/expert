import React, { useState, useRef } from "react";
import { Typography, Modal, Steps, Carousel } from "antd";

import WrappedSignupForm from "../signup-form/SignupForm";
import Profile_builder from "../Profile-Builder/Profile-builder";


const Expertcaro = props => {
    const refsigntupexpert = useRef();
    const [nextstep, setNextstep] = useState(0);
    const { Step } = Steps;
    const handlesignupexpert = (e) => {
        e.preventDefault();
        console.log('lena');
        setNextstep(nextstep + 1);
        refsigntupexpert.current.next();
        props.setProfileExpert(true);
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
                    <Profile_builder setShowmodel={props.setShowmodel} profileExpert={props.profileExpert} setProfileExpert={props.setProfileExpert} createProfile={props.createProfile} />

                </div>
            </Carousel>
            <Steps className="setps" current={nextstep}>
                <Step />
                <Step />
            </Steps>
        </div>
    );
};


Expertcaro.propTypes = {

};


export default Expertcaro;
