import React from 'react'
import './partners.css';

import Pancake from '../../assets/pancakeswap.png';
import Coingecko from '../../assets/coingecko.png';
import Coinmarketcap from '../../assets/coinmarketcap.png';
import Dextool from '../../assets/dextool.png';
import Trustwallet from '../../assets/trustwallet.png';
import Poocoin from '../../assets/poocoin-2.png';
import Binancee from '../../assets/Binancee.png';
import Meta from '../../assets/Metamask-logo.png'



function Partners() {
  return (
    <div className='partner_main_cotainer'>
        <h3 className='tool_p'>Partners and Tools</h3>
        <div className='row_container'>
            <div className='partners_row_one'>
                <div className='partners_cols'>
                    <img src={Dextool} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Pancake} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Coinmarketcap} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Binancee} alt="" />
                </div>
            </div>
            <div className='partners_row_two'>
                <div className='partners_cols'>
                <img src={Meta} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Trustwallet} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Coingecko} alt="" />
                </div>
                <div className='partners_cols'>
                <img src={Poocoin} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners;