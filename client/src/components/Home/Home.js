import React from 'react';
import './Home.css';
import NavBar from '../layout/NavBar/NavBar';
import Intro from './intro/Intro';
import Experts from './Experts/Experts';
import Contact from './Contact/Contact';
import Location from './Location/Location';
import Footer from '../layout/Footer/Footer';

const Home = () => {
    return (

    <React.Fragment>

           <NavBar/>
            <Intro/>
           <Experts/>
           <Contact/>
           <Location/>
           <Footer/>
    
    </React.Fragment>

    )
}

export default Home;
