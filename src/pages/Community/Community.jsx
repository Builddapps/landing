import React from 'react'
import './community.css'

import James from '../../assets/James.jpeg'
import Zoe from '../../assets/zoe.jpeg'
import Toby from '../../assets/Toby.png'


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
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            reiciendis illo saepe magni alias, deleniti laudantium porro
            exercitationem atque nulla aperiam. Pariatur asperiores odio ab
            reiciendis quam cupiditate cumque consectetur."
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            atque fugiat pariatur alias velit id eos. Ratione libero laudantium,
            voluptate enim omnis quam dolorem autem eligendi vel, architecto et
            eius?"
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
            " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            nesciunt fugit, cum blanditiis molestias minus pariatur explicabo
            nulla nam voluptates atque. Magnam obcaecati accusamus dolores
            explicabo, laudantium nostrum. Earum, sunt."
            <br/>
            <h4>James Shelvey</h4>
          </p>
        </div>
      </div>

      <h1 className="comm_container_h1">Dive right into our community</h1>
    </div>
  )
}

export default Community
