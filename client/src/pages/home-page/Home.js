import React from 'react';
import './Home.css';
import NavBar from '../../components/layout/NavBar/NavBar';
import Intro from '../../components/Home/intro/Intro';
import Experts from '../../components/Home/Experts/Experts';
import Contact from '../../components/Home/Contact/Contact';
import Location from '../../components/Home/Location/Location';
import Footer from '../../components/layout/Footer/Footer';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

;

const Home = () => {

    const Map = ReactMapboxGl({
        accessToken:
         "pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg"
      });

    //   fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
    //   .then(res=> console.log("dsds",res.json()))


    
    return (

    <React.Fragment>
            <Intro/>
           <Experts/>
           <Contact/>
           <Location/>
    </React.Fragment>

    )
}

export default Home;
