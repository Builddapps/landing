import React from 'react';
import './community.css';

import James from '../../assets/James.jpeg';

function Community() {
  return (
    <div className='comm_container'>
        <div className='comm_header'>
            <h1>Join the web 3.0 Evolution</h1>
            <p>the DEIP community is a globally distributed home of developers, token holders, validators, and members supporting the protocol</p>
        </div>

        <div className='people_in_comm'> 
            <div className='people_in_col1'>
                <img src={James} alt="" />
            </div>  
            <div className='people_in_col2'>
                <h1>DEVELOPWE</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam reiciendis illo saepe magni alias, deleniti laudantium porro exercitationem atque nulla aperiam. Pariatur asperiores odio ab reiciendis quam cupiditate cumque consectetur.</p>
            </div>
        </div>
    {/* 2 */}
    <div className='people_in_comm'> 
            <div className='people_in_col1'>
                <img src={James} alt="" />
            </div>  
            <div className='people_in_col2'>
                <h1>Investors</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque fugiat pariatur alias velit id eos. Ratione libero laudantium, voluptate enim omnis quam dolorem autem eligendi vel, architecto et eius?</p>
            </div>
        </div>
        {/*3*/}
        <div className='people_in_comm'> 
            <div className='people_in_col1'>
                <img src={James} alt="" />
            </div>  
            <div className='people_in_col2'>
                <h1>devinvestor</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nesciunt fugit, cum blanditiis molestias minus pariatur explicabo nulla nam voluptates atque. Magnam obcaecati accusamus dolores explicabo, laudantium nostrum. Earum, sunt.</p>
            </div>
        </div>

        <h1>dive right into our community</h1>
    </div>
  )
}

export default Community