import React from 'react'
import 'react-html5video/dist/styles.css'
import './token.css'
// import { distribution } from './data';
import Ball from '../../assets/buildd.png';
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination';
import Stake from "../../assets/stake-coin.png";
import Gov from "../../assets/governance-coin.png";
import Build from "../../assets/apps-coin.png";
import Charts from './Chart/Charts';


const Chart = () => {
  return (
    <>
      <div className="bull3_token_head">
      <h1 className='lightt'>The light is Heropage</h1>
        <div className="bull3_vid-banner">
          <div className='col1'>
          <h1>Token For All</h1>
            <button className="btn-2" type="button" disabled>
              <a disabled href='www.man.com' target="_blank" rel="noreferrer">
                buy buidl tokens
              </a>
            </button>
          </div>
          <div className='col2'>
          <img src={Ball} alt="" />
          </div>
        </div>

        <div className="token-intro">
          <div className='col1'>
            <img src={Build} alt="" srcset="" />
            <h2>Builders Token</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolores voluptatum ipsa tempora voluptas, quam deleniti laboriosam doloremque possimus beatae!</p>
          </div>
          <div className='col2'>
          <img src={Stake} alt="" srcset="" />
          <h2>Staking/Yeld Faming</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolores voluptatum ipsa tempora voluptas, quam deleniti laboriosam doloremque possimus beatae!</p>
        </div>
        <div className='col3'>
        <img src={Gov} alt="" srcset="" />
        <h2>Governance token</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolores voluptatum ipsa tempora voluptas, quam deleniti laboriosam doloremque possimus beatae!</p>
        </div>
        </div>

          <div className='multi-chain_coin'>
            <h2>Buidl token will be also deployed on other DLT protocols (as "wrapped buildl"), including on Binance Chain, Near Protocol, Ethereum, and others.</h2>
            <p>buildl will provide bridges between DEIP main network and other networks in order to maintain operability and seamless cross-chain transactions. DEIP token will always remain liquid both on all networks where it has been deployed.</p>
          </div>

          <h1 className='roadmaph1'>Roadmap</h1>
        <div className='roadmap-div'>
        <h1>Q1</h1>
          <div className='road_col1'>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
          </div> 
          <h1>Q2</h1>
          <div className='road_col2'>
          <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            </div> 
            <h1>Q3</h1>
            <div className='road_col3'>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            </div> 
            <h1>Q4</h1>
            <div className='road_col4'>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            <div>
              <h2>Phase #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nobis.</p>
            </div>
            </div>          
        </div>


       <div className='token_ditribution'>
        <h1>BuILD token distribution</h1>
          <div className='token-distribution_row'>
            <div className='token_dist_col1'>

            </div>
            <div  className='token_dist_col2'>
              <Charts/>
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
