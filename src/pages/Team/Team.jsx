import React from 'react'

import 'react-html5video/dist/styles.css'
import './team.css'

import Devin from "../../assets/devinvestor.png";

const teamData = [
  {
    id: 1,
    founderName: 'Michael B',
    pos: 'Web/Blockchain dev',
    linked: 'https://www.linkedin.com/in/michael-b-319a13138/',
  },
  {
    id: 2,
    founderName: 'A Santos',
    pos: 'Web/Blockchain dev',
    linked: 'https://www.linkedin.com/in/abusomwan-santos/',
  },
  {
    id: 3,
    founderName: 'Alexander Jessica',
    pos: 'Project Manager',
    linked: 'https://www.linkedin.com/in/jessica-alexander-8619751b0',
  },
  {
    id: 5,
    founderName: 'Colin Power',
    pos: 'Crypto Economist',
    linked: 'https://twitter.com/collin_code',
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum sequi optio maiores sed obcaecati aspernatur debitis unde deserunt dolorem?</p>
          </div>
        </div>

        <div className='vision_div'>
          <div className='vision_col1'>
            <h1>vision</h1>
          </div>
          <div className='vision_col2'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sequi temporibus ratione odio, optio pariatur natus fugiat ipsum totam quod.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sequi temporibus ratione odio, optio pariatur natus fugiat ipsum totam quod.
            </p>
          </div>
        </div>      

        <div className="team-section">
          {teamData.map((team) => {
            return (
              <div className="team-member" key={team.id}>
                {/* <img src={team.img} alt="" /> */}
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
