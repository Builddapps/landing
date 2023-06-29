import React from 'react'
import './allchain.css'

import Smart from '../../assets/smartcontract.png'

function Allchain() {
  return (
    <div className="allchain_container">
      <h1>
        Multi-chain support for
        <br /> decentralized applications.
      </h1>
      <div className="allchain_div">
        <div className="allchain_col1">
          <p>Decentralized VCs</p>
          <img src={Smart} alt="" />
        </div>
        <div className="allchain_col2">
          <p>
            decentrabuilds is a easy but advanced multichain structure for
            interoperability. You build, the commuinty support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Allchain
