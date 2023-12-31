// import { display } from '@mui/system'
import React, {useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoblack.png'
import './navbar.css'
// Try and understand BEM later BLOCK ELEMENT MODIFIER
import Litepaper from '../../assets/dbuilds.pdf';

const Menu = () => (
  <>
    <Link to={'/tokenomics'} className="links">
      Token
    </Link>
    <Link to={'/team'} className="links">
      Team
    </Link>
    <Link to={'/community'} className="links">
      Community
    </Link>
    {/* <Link to={'/litepaper'} className="links">
      Litepaper
    </Link> */}
    <a
      href={Litepaper}
      target="_blank"
      rel="noreferrer"
      className='links'>
      Litepaper
    </a>
    {/* <a
      href="https://bullchords-organization.gitbook.io/litepaper/"
      target="_blank"
      rel="noreferrer"
      className='links'>
      Vote
    </a> */}
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)  
  return (
    <div className="bull3__navbar">
      <div className="bull3__navbar-links_logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="bull3__navbar-links">
        <div className="bull3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="bull3__navbar-sign">
        <a
          href="https://www.decentrabuilds.com/#tokensale"
          // target="_blank"
          rel="noreferrer"
          className="btn btn-1"
          type="button"
        >
          Buy Token
        </a>
      </div>
      <div className="bull3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="navicon"
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="navicon"
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="bull3__navbar-menu_container scale-up-hor-right">
            <div className="bull3__navbar-menu_container-links" onClick={() => setToggleMenu(false)}>
            <Menu/> 
              <div className="bull3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button className="btn btn-1" type="button">
                  <a
                    href="#tokensale"
                    // target="_blank"
                    rel="noreferrer"
                  >
                    Buy Token 
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
