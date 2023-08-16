import React, { Component } from 'react';
import axios from 'axios';
import './tokensale.css'

import BNBL from '../../assets/bnb.png';
import DCEB from '../../assets/decentracoin.png';

class PriceDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bnbPrice: null,
    };
  }

  componentDidMount() {
    this.fetchBNBPrice();
  }

  fetchBNBPrice() {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
      .then((response) => {
        const bnbPrice = response.data.binancecoin.usd;
        this.setState({ bnbPrice });
      })
      .catch((error) => {
        console.error('Error fetching BNB price:', error);
      });
  }

  render() {
    const { bnbPrice } = this.state;

    return (
      <div className='buythings'>
        {/* <h2>BNB Price</h2> */}
        {bnbPrice !== null ? (
          <p>1 <img src={BNBL} alt="" /> BNB = {bnbPrice/0.0005} DBUILDS <img src={DCEB} alt="" /> </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PriceDisplay;
