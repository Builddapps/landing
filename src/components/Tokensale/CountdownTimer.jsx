import React, { Component } from 'react';
import ProgressBar from './Progressbar';
import PriceDisplay from './Pricedisplay';

import './tokensale.css';
import QRcode from '../../assets/contractqr.png';
import DCEB from '../../assets/decentracoin.png';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      targetDate: new Date('2023-12-31T00:00:00').getTime(), // Replace with your target date and time
      timeRemaining: {}
    };

    this.calculateTimeRemaining = this.calculateTimeRemaining.bind(this);
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.calculateTimeRemaining, 1000);
    this.calculateTimeRemaining();
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeRemaining = this.state.targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(this.timerInterval);
      this.setState({ timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 } });
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      this.setState({ timeRemaining: { days, hours, minutes, seconds } });
    }
  }

 
  render() {
    const { days, hours, minutes, seconds } = this.state.timeRemaining;

    const wallet = "0x4EA6826a54bdE538D4dd2E067868d53daF1bAC67";

    const handleSubmit = (e) => {
      e.preventDefault();
      const amount = parseFloat(e.target.amount.value);
      // if (amount >= 50) {
      //   this.setState({ inputValue: amount, showCol2: true });
      //   e.target.amount.value = '';
      // }
      if (amount < 50) {
        this.setState({ inputValue: "Value is less than 50", showCol2: false });
      } else if (amount > 1000) {
        this.setState({ inputValue: "Value is more than 1000", showCol2: false });
      } else {
        this.setState({ inputValue: amount, showCol2: true });
        e.target.amount.value = '';
      }
    };

    return (
      <>
      <div className='time_container ontop_tokensale' id='tokensale'>
        <h1>Decentrabuilds Smart Contract Funding Private Sale.</h1>
        <p className='token_contract'>Verified Token Contract: <span className='verfied_ox'>0xA249e07dFaE1ae4128F18Da6Fb9E2C7b64a12f41</span></p>
      <div className='time_row animated-box'>
        <div className='col1 col_img'>
          <div className='col_imgg'>
          <p>Buy DBUILDS 50% off Listing Price</p>
          <img src={DCEB} alt="" />
          </div>
        <div className="countdown-timer">
        <div className="time-block">
          <div className="time">{days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-block">
          <div className="time">{hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-block">
          <div className="time">{minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-block">
          <div className="time">{seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
      <input className='buy_input' type="number" name="amount" id="" placeholder=' ...Amount in $' />
      <button className='buy_btn glow-button'>BUY</button>
      </form>
      <div className='fetched_price'>
      <PriceDisplay />
    <p className='min_max'>Min buy: $50 | Max buy $1,000</p>
    </div>
    <sub className='caps'>$5,000 <span className='hard_cap'>$10,000 </span></sub>
      <ProgressBar/>
      <sup className='caps'>Soft cap <span className='hard_cap'>Hard cap </span></sup>
        </div>
        <div class="light"></div>

        <div className='col2' style={{ display: this.state.showCol2 ? 'block' : 'none' }}>
            <p>Send: ${this.state.inputValue} worth of BNB to: <span className='wallet_add'>{wallet}</span> <br/> <br/> SCAN <br/> <br/><img src={QRcode} alt="" /> <br/> You will get {this.state.inputValue / 0.0005} $DBUILDS </p>
          </div>
      </div>
      </div>
      </>
    );
  }
}

export default CountdownTimer;
