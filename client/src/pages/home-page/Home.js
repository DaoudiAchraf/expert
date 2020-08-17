import React from 'react';
import './Home.css';
import NavBar from '../../components/layout/NavBar/NavBar';
import Intro from '../../components/Home/intro/Intro';
import Experts from '../../components/Home/Experts/Experts';
import Contact from '../../components/Home/Contact/Contact';
import Location from '../../components/Home/Location/Location';
import Footer from '../../components/layout/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Intro />
            <Experts />
            <Contact />
            <Location />
        </div>

    )
}

export default Home;
