import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

import Dollar from '../../assets/dollar-50.png'
import Pen from '../../assets/pen-50.png'
import Like from '../../assets/like-50.png'
import Crowd from '../../assets/crowd-50.png'

const Header = () => {
  return (
    <>
      <div className="bull3__header" id="home">
        <div className="bull3__header-content">
          <div className="small_screen bull_hero_display">
            <p>Economy For Dapps</p>
          </div>

          {/* <h1 className="bull3__broad small_h1">Economy for dapps.</h1> */}

          <section className="animation">
            <div className="first">
              <div>Become a VC with a token.</div>
            </div>
            <div className="second">
              <div>Creating multiple ROI</div>
            </div>
            <div className="third">
              <div>Build a better web </div>
            </div>
          </section>
          <div className="ontop_bull">
            <div className="ontop_cover">
              <div className="col_1">
                <sub>
                  {' '}
                  <img src={Dollar} alt="" srcset="" /> Initial Capitalization
                </sub>
                <p>$499,901</p>
              </div>
              <div className="col_2">
                <sub>
                  {' '}
                  <img src={Pen} alt="" srcset="" /> Total proposals
                </sub>
                <p>9</p>
              </div>
              <div className="col_3">
                <sub>
                  {' '}
                  <img src={Like} alt="" srcset="" /> Total Votes
                </sub>
                <p>$0</p>
              </div>
              <div className="col_4">
                <sub>
                  {' '}
                  <img src={Crowd} alt="" srcset="" /> Token holders
                </sub>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="bull3__header-content_btn">
            {/* <button className="btn-2" type="button" disabled>
              <a disabled target="_blank" rel="noreferrer">
                Private Sale
              </a>
            </button> */}
            <button className="btn-2" type="button">
              <Link to={'/projectsform'}>Build With Us</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
