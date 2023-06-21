import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide.css';

import Bnb from '../../assets/bnb.png';
import Near from '../../assets/near.png';
import Avax from '../../assets/avax.png';
import Aptos from '../../assets/aptos.png';
import Solana from '../../assets/solana.png';
import Arbitrium from '../../assets/arbitrum.png';
import Eth from '../../assets/eth.png';
import Matic from '../../assets/matic.png';





export default function SimpleSlider() {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
    <Slider {...settings} className="blockchains">
      <div className="ttt"> 
      <img src={Eth} alt="" />
      </div>
      <div>
      <img src={Bnb} alt="" />
      </div>
      <div>
      <img src={Arbitrium} alt="" />
      </div>
      <div>
      <img src={Aptos} alt="" />
      </div>
      <div>
      <img src={Near} alt="" />
      </div>
      <div>
      <img src={Solana} alt="" />
      </div>
      <div>
      <img src={Avax} alt="" />
      </div>
      <div>
      <img src={Matic} alt="" />
      </div>      
    </Slider>
    </>
  );
}