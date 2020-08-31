import React from "react";
import { connect, Provider } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home-page/Home";
import Navbar from "./components/layout/NavBar/NavBar";
import Footer from './components/layout/Footer/Footer';
// import Navbar from "./components/navbar/Navbar";
import SigninPage from "./pages/signin-page/SigninPage";
import ExpertPage from "./pages/expert-page/ExpertPage";
import SignUpPage from "./pages/signup-page/SignUpPage";
import SearchExpertsPage from "./pages/search-experts-page/SearchExpertsPage";
import { logout } from "./actions/auth-actions/actions";
import ProfilePage from "./pages/profile-page/Profile-page";
import store from "./stores/store-dev";

const App = props => {
  console.log("eertegy", props.user);
  return (
    <Provider store={store}>
    <div className={"app"} style={{ backgroundColor: '#F6F9FC' }} >
      <Navbar
        user={props.user}
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
      />


      <Switch location={props.history.location}>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/expert"} component={ExpertPage} />
        <Route exact path={"/profile/:id"} component={ProfilePage} />
        <Route exact path={"/search"} component={SearchExpertsPage} />
        {/* <AuthRoute
          authenticated={props.isLoggedIn}
          path="/expert"
          component={ExpertPage}
        /> */}
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
      <Footer />
    </div>
    </Provider>
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
