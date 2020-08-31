import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import WrappedSignupForm from "../../components/signup-form/SignupForm";
import { Typography, Modal, Steps, Carousel } from "antd";
import { signup, signupExpert } from "../../actions/auth-actions/actions";
import { createProfile } from "../../actions/profile-actions/actions";
import Profile_builder from "../../components/Profile-Builder/Profile-builder";
import "./signup-page.scss";

const SignUpPage = props => {
  const [nextstep, setNextstep] = useState(0);
  const refInput = useRef();
  const { Step } = Steps;
  console.log(props.showmodel);
  const handleCancel = () => {
    props.setShowmodel(false);
  }
  const handle = (e) => {
    e.preventDefault();
    console.log("clicked")
    setNextstep(nextstep + 1);
    console.log(refInput.current);
    refInput.current.next();
  }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const [data, setData] = useState(null);

  return (

    <Modal centered onCancel={handleCancel} visible={props.showmodel} footer={null}>
      <Carousel dots={false} ref={refInput} afterChange={onChange} >
        <div className="signup-page">
          <Typography.Title className="title">Sign up</Typography.Title>
          <div className="content">
            <WrappedSignupForm refInput={refInput} handle={handle} signupExpert={props.signupExpert} signup={props.signup} setData={setData} />
          </div>
          <button onClick={handle}> step 2</button>
        </div>

        <div className="signup-page">
          <Typography.Title className="title">Profile</Typography.Title>

          <Profile_builder createProfile={createProfile} data={data} setData={setData} />

          <div className="content">
            <button onClick={handle}> step 2</button>
          </div>


        </div>
      </Carousel>
      <Steps current={nextstep}>
        <Step />
        <Step />
        <Step />
      </Steps>
    </Modal>

  );
};

export default connect(
  null,
  { signup, signupExpert, createProfile }
)(SignUpPage);
