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
        <h1>For everyone that want to build the next big thing.</h1>
        <p className="buildp">
          {' '}
          You are a venture capitalist for just holding a token. You
          can be part of awesome projects <br/>on the web3 for holding $DCEB token.
        </p>
        <div className="buildweb_row">
          <div data-aos="fade-right" className="buildweb_col1">
            <p data-aos="fade-right">
              {' '}
              Decentrabuilds is a DAO protocol that allows leverage
              on the community to create the avenue for web3 project to build
              effortlessly.{' '}
            </p>
          </div>
          <div data-aos="fade-left" className="buildweb_col2">
            <p data-aos="fade-left">
              {' '}
              $DCEB token investors and holders are builders of the future.
              Every token of Decentrabuilds is a share for every applications
              that will be live on full or partly support of decentrabuilds
              ecosystem.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buildweb
