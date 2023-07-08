import React from 'react';
import './feature.css';

import Dollar from '../../assets/dollar-50.png';
// import Pen from '../../assets/pen-50.png';
import Like from '../../assets/like-50.png';
import Crowd from '../../assets/crowd-50.png';

function Features() {
  return (
    <div className='features_container'>
        <h1>The Projects</h1>
        <div className='features_div'>
            <div className='feature_col1'>
                <p>DAO Dapp</p>
                <img src={Crowd} alt="" />
            </div>
            <div className='feature_col1'>
                <p>Lottery Dapp</p>
                <img src={Dollar} alt="" />
            </div>
            <div className='feature_col1'>
                <p>DEX</p>
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