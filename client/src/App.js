import React, { useRef } from "react";
import { connect, Provider } from "react-redux";
import { Route, Redirect, Switch, withRouter, useLocation } from "react-router-dom";
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
import AppointmentsPage from './pages/expertAppointments-page/AppointmentsPage';
import ExpertMissions from './pages/expert_missions_page/ExpertMissions';
import MissionsDonePage from './pages/missions_done_page/MissionsDonePage';
import ClientProfilePage from './pages/clientProfile-page/ClientProfile-page';
import RapportPage from './pages/rapport-page/RapportPage';
import RapportPdf from './pages/rapport-page/RapportPdf';
import ArticlePage from './pages/article-page/ArticlePage';
import store from "./stores/store-dev";
import './App.scss';
import 'antd/dist/antd.css';



const App = props => {

  const refs = {
    contactRef: useRef(null),
    reviewRef: useRef(null),
    teamRef: useRef(null),
    serviceRef: useRef(null),
    aProposRef: useRef(null)
  }
  const location = useLocation();

  //console.log('refs',refs);

  return (
    <Provider store={store}>
      <div className={"app"} style={{ backgroundColor: '#F6F9FC' }} >
        {location.pathname != '/rapportPdf' && <Navbar
          refs={refs}
          user={props.user}
          isLoggedIn={props.isLoggedIn}
          logout={props.logout}
        />}
        <Switch location={props.history.location}>
          <Route exact path={"/"} component={() => <HomePage refs={refs} />} />
          <Route exact path={"/expert"} component={ExpertPage} />
          <Route exact path={"/profile/:id"} component={ProfilePage} />
          <Route exact path={"/search"} component={SearchExpertsPage} />
          {/* <Route exact path={"/appointments"} component={AppointmentsPage} /> */}
          {/* <Route exact path={"/missions"} component={ExpertMissions} /> */}
          {/* <Route exact path={"/done-missions"} component={MissionsDonePage} /> */}
          <Route exact path={"/rapport/:id"} component={RapportPage} />
          {/* <Route exact path={"/client/:id"} component={ClientProfilePage} />
          <Route exact path={"/article"} component={ArticlePage} /> */}
          <Route exact path={"/rapportPdf"} component={RapportPdf} />
          {/* <AuthRout
          authenticated={props.isLoggedIn}
          path="/expert"
          component={ExpertPage}
        /> */}



          <AuthRoute path="/missions"
            authenticated={props.isLoggedIn}
            user={props.user}
            component={ExpertMissions} />

          <AuthRoute path="/done-missions"
            authenticated={props.isLoggedIn}
            user={props.user}
            component={MissionsDonePage} />

          {/* <Route exact path={"/done-missions"} component={MissionsDonePage} /> */}
          <Route exact path={"/client/:id"} component={ClientProfilePage} />
          <Route exact path={"/article"} component={ArticlePage} />
          {/* <Redirect to="/"/> */}

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
        {location.pathname != '/rapportPdf' && <Footer />}
      </div>
    </Provider>
  );
};
function AuthRoute({ component: Component, authenticated, user, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>

        !authenticated ? (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
          : user.role === "expert" ?
            (<Component {...props} />)
            :
            <Redirect to="/" />
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
