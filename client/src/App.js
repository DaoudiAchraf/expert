import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import SigninPage from "./pages/signin-page/SigninPage";
import ExpertPage from "./pages/expert-page/ExpertPage";
import SignUpPage from "./pages/signup-page/SignUpPage";
import { logout } from "./actions/auth-actions/actions";
import './App.scss';

const App = props => {
  return (
    <div className={"app"} style={{ backgroundColor: '#F6F9FC' }}>
      <Navbar
        user={props.user}
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
      />
      <Switch location={props.history.location}>
        <Route exact path={"/"} component={HomePage} />
        <AuthRoute
          authenticated={props.isLoggedIn}
          path="/expert"
          component={ExpertPage}
        />
        <GuestRoute
          authenticated={props.isLoggedIn}
          path="/signup"
          component={SignUpPage}
        />
        <GuestRoute
          authenticated={props.isLoggedIn}
          path="/signin"
          component={SigninPage}
        />
      </Switch>
    </div>
  );
};
function AuthRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function GuestRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>
        !authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
const mapStateToProps = reduxStore => {
  return {
    isLoggedIn: reduxStore.authReducer.isLoggedIn,
    user: reduxStore.authReducer.user,
    isLoadingUser: reduxStore.authReducer.isLoadingUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(App)
);
