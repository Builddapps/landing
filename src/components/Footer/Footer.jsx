// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo3 from '../../assets/logoblack.png'
// import BullInput from '../../BullInput'
// import telegram from '../../assets/ftele.png'
// import medium from '../../assets/fmedium.svg'
import twitter from '../../assets/ftwitter.svg'
import discord from '../../assets/Fdiscord.svg'

const Footer = () => {
  // const [emailList, setEmaillist] = useState('')
  // const addToEmail = () => {
  //   console.log(emailList)
  //   setEmaillist('')
  // }

  let date = new Date();
  let thisYear = date.getFullYear();

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo3} alt="" />
            <p>
            Decentrabuilds is a DAO protocol that allows leverage
              on the community to create the avenue for web3 project to build
              effortlessly.{' '}
            </p>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-top">
              <div className="right-menu">
                <h3>MENU</h3>
                <Link className="lin" to="/tokenomics">
                  TOKEN
                </Link>
                <Link className="lin" to={'/docs'}>
                  ROADMAP
                </Link>
                <Link className="lin" to={'./artisteform'}>
                  ARTISTE
                </Link>
              </div>
              <div className="left-menu">
                <h3>COMPANY</h3>
                <a
                  className="lin"
                  href="https://bullchords-organization.gitbook.io/litepaper/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHITEPAPER
                </a>
                <Link className="lin" to={'./team'}>
                  TEAM
                </Link>
                <a
                  className="lin"
                  href="https://bullchords-organization.gitbook.io/litepaper/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
            <div className="footer-menu-down">
              <h3>OUR COMMUNITY</h3>
              <div className="social-networks">
                {/* <a href="#">
                  <img src={telegram} alt="" />
                </a> */}
                {/* <a
                  href="https://medium.com/@bullchord"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={medium} alt="" />
                </a> */}
                <a
                  href="https://twitter.com/decentrabuilds"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
                <a
                  href="https://discord.gg/nbjgab3sKX"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={discord} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          {
              `Copyright © ${thisYear} decentrabuilds. All rights reserved.`
          }
        </p>
      </div>
    </>
  )
}

export default Footer
