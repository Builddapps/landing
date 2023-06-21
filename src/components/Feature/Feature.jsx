import React from 'react';
import './feature.css';

import Dollar from '../../assets/dollar-50.png';
// import Pen from '../../assets/pen-50.png';
import Like from '../../assets/like-50.png';
import Crowd from '../../assets/crowd-50.png';

function Features() {
  return (
    <div className='features_container'>
        <h1>The ecosysten</h1>
        <div className='features_div'>
            <div className='feature_col1'>
                <p>Community votes</p>
                <img src={Crowd} alt="" />
            </div>
            <div className='feature_col1'>
                <p>Lottery system</p>
                <img src={Dollar} alt="" />
            </div>
            <div className='feature_col1'>
                <p>AMM % DEFI</p>
                <img src={Like} alt="" />
            </div>
        </div>
        {/* <div className='features_div'>
            <div className='feature_col1'>
                <p>AMM % Defi</p>
                <img src={Pen} alt="" />
            </div>
            <div className='feature_col1'>
                <p></p>
                <img src={Like} alt="" />
            </div>
        </div> */}
    </div>
  )
}

export default Features