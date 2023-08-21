import React from 'react'
import 'react-html5video/dist/styles.css'
import './token.css'
// import { distribution } from './data';
import Ball from '../../assets/buildd.png'
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination';
import Stake from '../../assets/stake-coin.png'
import Gov from '../../assets/governance-coin.png'
import Build from '../../assets/apps-coin.png'
import Charts from './Chart/Charts'

const Chart = () => {
  return (
    <>
      <div className="bull3_token_head">
        {/* <h1 className='lightt'>The light is Heropage</h1> */}
        <div className="bull3_vid-banner">
          <div className="col1">
            <h1>Builders currency</h1>

            <a
              href="https://www.decentrabuilds.com/#tokensale"
              target="_blank"
              rel="noreferrer"
              className="BBT-link"
            >
              Buy DBUILDS Tokens
            </a>
            {/* </button> */}
          </div>
          <div className="col2">
            <img src={Ball} alt="" />
          </div>
        </div>

        <div className="token-intro">
          <div className="col1">
            <img src={Build} alt="" srcset="" />
            <h2>Builders Token</h2>
            <p>
              The decentrabuilds token serves as the builders token. It is the token for the project partners as well as the key value for the investors to earn in the partners project. 
            </p>
          </div>
          <div className="col2">
            <img src={Stake} alt="" srcset="" />
            <h2>Utility</h2>
            <p>
            Decentrabuilds token is a native token and it serves multiple purposes, it is used for the lottery, locking, and dex base currency.  
            </p>
          </div>
          <div className="col3">
            <img src={Gov} alt="" srcset="" />
            <h2>Governance token</h2>
            <p>
            Decentrabuilds token provides holders with voting rights for the selection of Project partners and the ability to earn based on tokens locked during the votes. 
            </p>
          </div>
        </div>

        <div className="multi-chain_coin">
          <h2>
            Decentrabuilds token is on the BSC network. If there will be a need to have a wrap on other network in the future, eg("$DBUILDS Eth"), the amount of token will be burnt on the BSC network. 
          </h2>
          <p>
            Wrapped tokens will serve to maintain operability and seamless multi-chain
            activities and will remain liquid on all
            networks.
          </p>
        </div>

        <h1 className="roadmaph1">Roadmap</h1>
        <div className="roadmap-div">
          <h1>Q3, 2023</h1>
          <div className="road_col1">
            <div className="roadmap-div">
              <h2>Website Launch</h2>
            </div>
            <div className="roadmap-div">
              <h2>Litepaper V1</h2>
            </div>
            <div className="roadmap-div">
              <h2>Project Research</h2>
            </div>
            <div className="roadmap-div">
              <h2>Private Sale</h2>
            </div>
            <div className="roadmap-div">
              <h2>Strategic Partnership</h2>
            </div>
            <div className="roadmap-div">
              <h2>Dao Voting Application</h2>
            </div>
          </div>
          <h1>Q4, 2023</h1>
          <div className="road_col2">
          <div className="roadmap-div">
              <h2>Launch Pad</h2>
            </div>
            <div className="roadmap-div">
              <h2>Dex Listing/Liquity lock</h2>
            </div>
            <div className="roadmap-div">
              <h2>List on Coinmarketcap & Coingecko</h2>
            </div>
            <div className="roadmap-div">
              <h2>Lottery App</h2>
            </div>
            <div className="roadmap-div">
              <h2>Ambassador Program</h2>
            </div>
            <div className="roadmap-div">
              <h2>Strategic Partnership</h2>
            </div>
            <div className="roadmap-div">
              <h2>Litepaper V2</h2>
            </div>
          </div>
          <h1>Q1, 2024</h1>
          <div className="road_col3">
            <div className="roadmap-div">
              <h2>Decentrabuilds DEX Launch</h2>
            </div>
            <div className="roadmap-div">
              <h2>Listing on CEX</h2>
            </div>
            <div className="roadmap-div">
              <h2>Strategic Partnership</h2>
            </div>
            <div className="roadmap-div">
              <h2>Litepaper V3</h2>
            </div>
          </div>
          <h1>Q2, 2024</h1>
          <div className="road_col4">
            <div className="roadmap-div">
              <h2>Decentrabuilds Global Conference</h2>
            </div>
            <div className="roadmap-div">
              <h2>Strategic partnership</h2>
            </div>
          </div>
        </div>

        <div className="token_ditribution">
          <h1>$DBUILDS token distribution</h1>
          <div className="token-distribution_row">
            <div className="token_dist_col1"></div>
            <div className="token_dist_col2">
              <Charts />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bull3__chart">
        <div className="bull3__content">
          <div className="bull3_metric">
            {distribution.map((token) => {
              console.log(token.img)
              return (
                <li>
                  <img src={token.img} alt="" />
                  <p> {token.supply}</p>
                </li>
              )
            })}
          </div>
          <div className="bull3__piechart">
            <img src={pieChart} alt="" />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Chart
