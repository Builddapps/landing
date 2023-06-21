import React from 'react';
import './allchain.css'

import Smart from '../../assets/smartcontract.png'

function Allchain() {
  return (
    <div className='allchain_container'>
        <h1>Multi-chain infrastructure for<br/> decentralized creator economy</h1>
        <div className='allchain_div'>
            <div className='allchain_col1'>
            <p>Replay track</p>
            <img src={Smart} alt="" />
            </div>
            <div className='allchain_col2'>
                <p>DEIP is a Substrate-based chain with advanced interchain interoperability provided by a Collective Intelligence Labs Multichain Infrastructure.</p>
            </div>
        </div>
    </div>
  )
}

export default Allchain