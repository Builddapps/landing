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
              disabled
              href="www.man.com"
              target="_blank"
              rel="noreferrer"
              className="BBT-link"
            >
              Buy Buidl Tokens
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
              The decentrabuilds token served as the builders token. It is the token for the project partners as well as the key valid for the investors to earn in the partners project. 
            </p>
          </div>
          <div className="col2">
            <img src={Stake} alt="" srcset="" />
            <h2>Utility</h2>
            <p>
            decentrabuilds token is a native token and it serves multiple purposes, it is used for the lottery, staking, dex base currency. All financial transactions in decentrabuilds have fees that will allow some token to reduce circulation and others that we use BNB, the accumulated BNB will be used to buy back and burn decentrabuilds tokens. 
            </p>
          </div>
          <div className="col3">
            <img src={Gov} alt="" srcset="" />
            <h2>Governance token</h2>
            <p>
            decentrabuilds token provides holders with voting rights for the selection of Project partners and the ability to earn based on token hold during the vote. Also, other activities for future projects and network imorovement will be through the community votes.
            </p>
          </div>
        </div>

        <div className="multi-chain_coin">
          <h2>
            decentrabuilds token is on the BSC network. However, If there will be need to have a wrap on other network, eg("Builddaps Aptos") the amount of token will be burnt on the BSC network. 
          </h2>
          <p>
            Wrapped token will serve to maintain operability and seamless multi-chain
            transactions and will always remain liquid both on all
            networks.
          </p>
        </div>

        <h1 className="roadmaph1">Roadmap</h1>
        <div className="roadmap-div">
          <h1>Q3, 2023</h1>
          <div className="road_col1">
            <div className="roadmap-div">
              <h2>decentrabuilds website Launch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Lite paper Version 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Project Research</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Launch Pad</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Dex Listing/Liquity lock</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>List on Coinmarketcap & Coingecko</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>DAO VOTING</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
          </div>
          <h1>Q4, 2023</h1>
          <div className="road_col2">
            <div className="roadmap-div">
              <h2>Lottery App</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Ambassador Program</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Strategic Partnership</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
          </div>
          <h1>Q1, 2024</h1>
          <div className="road_col3">
            <div className="roadmap-div">
              <h2>DEX Launch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Listing on CEX</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Strategic Partnership</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
          </div>
          <h1>Q2, 2024</h1>
          <div className="road_col4">
            <div className="roadmap-div">
              <h2>Builddaps Fest</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>Strategic partnership</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
            <div className="roadmap-div">
              <h2>V3 Litepaper</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, nobis.
              </p>
            </div>
          </div>
        </div>

        <div className="token_ditribution">
          <h1>BuILD token distribution</h1>
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
