import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Glider.css';
import img from '../../../../images/header.jpeg';
import img1 from '../../../../images/header.jpg';


const Glider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true
      };

    return (
       
        <Slider {...settings}>
        <div className="imgContainer">
          <img className="img" src={img}></img>
          
          <h4>Daoudi Achref</h4>
          
        </div>
        <div className="imgContainer">
          <img className="img" src={img1}></img>
          <h4>Mohamed Salah</h4>
        </div>
        <div className="imgContainer">
          <img className="img" src={img}></img>
          <h4>Harrabi Skander</h4>
        </div>
        <div className="imgContainer">
          <img className="img" src={img1}></img>
          <h4>Ala Ben Abdallah</h4>
        </div>
        <div className="imgContainer">
          <img className="img" src={img}></img>
          <h4>Aissa Jihed</h4>
        </div>
      </Slider>
        
    )
}

export default Glider;
