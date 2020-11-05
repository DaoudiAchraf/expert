import React, { useEffect } from "react";
import { connect } from "react-redux";
import WrappedSigninForm from "../../components/signin-form/SigninForm";
import { Typography } from "antd";
import { signin, getAuthUser } from "../../actions/auth-actions/actions";

import "./signin-page.scss";

const SigninPage = props => {
  useEffect(() => {
    console.log('blabla')
  }, [props.user])
  return (
    <div className="signin-page">
      <Typography.Title className="title">Sign in page</Typography.Title>
      <div className="content">
        <WrappedSigninForm signin={props.signin} getAuthUser={props.getAuthUser} user={props.user} isLoggedIn={props.isLoggedIn} />
      </div>
    </div>
  );
};
const mapStateToProps = reduxStore => {
  return {
    user: reduxStore.authReducer.user,
    isLoggedIn: reduxStore.authReducer.isLoggedIn
  };
};
export default connect(
  mapStateToProps,
  { signin, getAuthUser }
)(SigninPage);
