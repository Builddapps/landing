import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './buildweb.css'

function Buildweb() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="buildweb_container">
      <div className="buildweb_div">
        <h1>For everyone that want to build the next big solution.</h1>
        <p className="buildp">
          {' '}
          Join the venture capitalist for holding tokens. Be part of awesome projects <br/>on the web3 for holding $DCEB token.
        </p>
        <div className="buildweb_row">
          <div data-aos="fade-right" className="buildweb_col1">
            <p data-aos="fade-right">
              {' '}
              Decentrabuilds is a DAO protocol that allows the 
              community to leverage effortlessly on projects through the $DCEB token.
              {' '}
            </p>
          </div>
          <div data-aos="fade-left" className="buildweb_col2">
            <p data-aos="fade-left">
              {' '}
              $DCEB token investors and holders are builders of the future.
              Every token of Decentrabuilds is a share for every application
              that are built through our support.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buildweb
