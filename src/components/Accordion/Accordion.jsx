import React, {useState} from 'react';
import './accordion.css';

const dataCollection = [
    {
        question: 'Projects Invested Reward',

        answer: ' decentrabuilds will support projects that are building on web3 based on the automous decison through voting of the community and token holdrers. The projects we fund will have the obligation to support the investors(buld token holders) at the successful launch of the their project and the token revceived from the dapps will be distributed to all the people that participated in the voting round in proprotion to the build token they hold. There is a vesting period of 4 months for the token to be distributed to all holders. ',
    },

    {
        question: 'Lottery Reward',
        answer: ' Lottery reward is an engaging system to distribute reward from a pool. Ticket will be sold to perticipants and the best luck person wins the reward.',
    },

    {
        question: 'Staking Reward',
        answer: ' Staking build tokens allows you to perticipate in the voting rounds for projects which gives you back the reward through your votes and you also eanr 20% apy for staking the build token. ',
    },

    {
        question: 'Token burning ',
        answer: ' 1% of the tokens sold in the market will be burned to reduced the numbers of coins in circulation. There is built along in the token contract to keep the price stable. ',
    },
    {
        question: 'Governance',
        answer: ' build is an autrosic autonomous application and the tokens gives you the access to join the decision makers in the ecosystem.',
    },

];


const Accord = () => {
    const [accordion, setOnAccordion] = useState(0);
    
    function toggleAccordion(index){
        if(index === accordion){
            setOnAccordion(-1)
            return
        }
        setOnAccordion(index)
    }

  return (
    <>
    <div className='accord_main_container'>
    <div className='accord_containner'>
        <div className='accordion_h1'>
            <span className='accordion_title'></span>
            <h1>Investors and token holders Incentives % Benefits</h1>
        
        </div>
        <div className='accordion_cont'>
            {dataCollection.map((item, index)=> (
                <div key={index} onClick={()=> toggleAccordion(index)}>
                     <div className="accordion_cont_heading">
                     <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                    </div>
                    
                    <div className='plus_minus'>
                        {accordion === index? (<>  <span className='verti'>-</span></>): (<> <span className='verti'>+</span></>)}
                    </div>
                    <div>
                        <p className={accordion === index ? "active": "inactive"}>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
    </>
  );
};

export default Accord;