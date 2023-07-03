import React from 'react'

import 'react-html5video/dist/styles.css'
import './team.css'

import Devin from "../../assets/devinvestor.png";
import Santos from "../../assets/santos.png";
import Mich from "../../assets/Mich.png";
import Collins from "../../assets/collins.png";
import Jessica from "../../assets/jessica.png"


const teamData = [
  {
    id: 1,
    founderName: 'Michael B',
    pos: 'Web/Blockchain dev',
    linked: 'https://www.linkedin.com/in/michael-b-319a13138/',
    img: Collins,
  },
  {
    id: 2,
    founderName: 'A Santos',
    pos: 'Web/Blockchain dev',
    linked: 'https://www.linkedin.com/in/abusomwan-santos/',
    img: Santos,
  },
  {
    id: 3,
    founderName: 'Alexander Jessica',
    pos: 'Project Manager',
    linked: 'https://www.linkedin.com/in/jessica-alexander-8619751b0',
    img: Jessica,
  },
  {
    id: 5,
    founderName: 'Colin Power',
    pos: 'Crypto Economist',
    linked: 'https://twitter.com/collin_code',
    img: Mich,
  },
]

const Team = () => {
  return (
    <>
      <div className="bull3_team-container">
        <div className="bull3_vid-banner-team">
          <div className='team_col1'>
            <img src={Devin} alt="" srcset="" />
          </div>
          <div className='team_col2'>
            <p>Decentrabuilds is a team of developers, web3 enthusiasts and builders. We aim to create the solution for web3 funding and make alot of venture capitalists of different investment size.</p>
          </div>
        </div>

        <div className='vision_div'>
          <div className='vision_col1'>
            <h1>Vision</h1>
          </div>
          <div className='vision_col2'>
            <p>
            We are supporting projects of great potential in Web3. Our vision is to be a source and base for the development of web3, and we look ahead to a future transformed for the better through blockchain technology. 
            </p>
            <br/>
            <p>
            Our vision is that one billion people will be in Blockchain technology by 2028, transforming and creating wealth distribution for everyone.  A lot of promising projects fail, not because the team or product failed, but because securing funds was simply too challenging. 
            </p>
          </div>
        </div>      

        <div className="team-section">
          {teamData.map((team) => {
            return (
              <div className="team-member" key={team.id}>
                <img src={team.img} alt="" />
                <h3 className='found-name'>{team.founderName}</h3>
                <small>{team.pos}</small>
                <div className="team-socials">
                 
                  <a href={team.linked} target="_blank" rel="noreferrer">
                    {/* <img src={linkedin} alt="linkedin" /> */}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Team
