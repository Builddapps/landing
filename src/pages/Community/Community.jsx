import React from 'react'
import './community.css'

import James from '../../assets/James.jpeg'
import Zoe from '../../assets/zoe.jpeg'
import Toby from '../../assets/Toby.png'
import Twitter from '../../assets/twitter-name.png'
import Discord from '../../assets/discord-name.png'



function Community() {
  return (
    <div className="comm_container">
      <div className="comm_header">
        <div className="header-body">
          <h1>Join the Web3 Builders</h1>
          <p>
            The decentrabuilds community is made up of developers,
            token holders, project partners, and other members supporting the growth
          </p>
        </div>
      </div>

      <div className="people_in_comm">
        <div className="people_in_col1">
          <img src={Toby} alt="" />
        </div>
        <div className="people_in_col2">
          <h1>Web 3 Developer</h1>
          <p>
            " I worked on Mindal Kinder some years ago. It is a game dapps. I built an MVP but I could not access any support. Having a project like decentrabuilds is a great solution to the future of Decentralized applications"
            <br/>
            <h4>Chan Yang</h4>
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="people_in_comm">
        <div className="people_in_col1">
          <img src={Zoe} alt="" />
        </div>
        <div className="people_in_col2">
          <h1>Investor</h1>
          <p>
            "A lot of ideas died because of lack of funding. Facebook could have been just a dream with the little support that held it at a point byt Edwardo. It is time for us to come together and finance Dapps of our dreams through decentrabuilds."
            <br/>
            <h4>Zoe Beam</h4>
          </p>
        </div>
      </div>
      {/*3*/}
      <div className="people_in_comm">
        <div className="people_in_col1">
          <img src={James} alt="" />
        </div>
        <div className="people_in_col2">
          <h1>Web 3 enthusiast</h1>
          <p>
            " I am bullish with the innovation of decentrabuilds. The power of collaboration and decentralization is powerful. I know awesome dapps will be birthed through Decentrabuilds."
            <br/>
            <h4>James Shelvey</h4>
          </p>
        </div>
      </div>

      <h1 className="comm_container_h1">Dive right into our community</h1>
      <div className='comm_box_row'>
        <div className='comm_box_col1'>
            <img src={Discord} alt="" />
           <p>Members</p>
           <p className='members'>2</p>
          <a href="https://discord.gg/nbjgab3sKX" target='_blank' rel="noreferrer"><button>Join The Builders</button></a>
        </div>
        <div className='comm_box_col2'>
          <img src={Twitter} alt="" />
          <p>Members</p>
          <p className='members'>152</p>
         <a href="https://twitter.com/decentrabuilds"target='_blank' rel="noreferrer"><button>Join The Builders</button></a>
        </div>
      </div>
    </div>
  )
}

export default Community
