import React, { useRef } from 'react';
import './Home.css';
import Intro from '../../components/Home/intro/Intro';
import Experts from '../../components/Home/Experts/Experts';
import Contact from '../../components/Home/Contact/Contact';
import Location from '../../components/Home/Location/Location';
import Articles from '../../components/Home/Articles/Articles';


const Home = (props) => {
    console.log('Home =====>',props);


    return (
        <div>
            <Intro />
            <Experts Ref={props.refs.teamRef} />
            <Contact  Ref={props.refs.serviceRef}/>
            <Articles />
            <Location Ref={props.refs.contactRef}  />
        </div>

    )
}

export default Home;
