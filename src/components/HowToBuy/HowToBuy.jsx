import React from 'react';
import copyIcon from '../../assets/copy.svg';
import createWallet from '../../assets/CreateWallet.svg';
import connectWallet from '../../assets/ConnectWallet.svg';
import swap from '../../assets/swap.svg';
import dextool from '../../assets/Dextools.svg';
import CoinGecko from '../../assets/Coingecko.svg';
import CoinMarket from '../../assets/CoinMarketCap.svg';
import waveOne from '../../assets/Waveone.svg';
import redGlass from '../../assets/Glassred.png';
import waveFour from '../../assets/Wavefour.svg';
import HalfRing from '../../assets/Glasscircle.png';
import "./HowToBuy.css"
const services = [
  {
    imgSrc: createWallet,
    heading: 'Create Wallet',
    text: "Download the wallet app or browser extension and create a wallet if you don't have one already.",
    button: 'Meta Mask',
  },
  {
    imgSrc: connectWallet,
    heading: 'Connect Wallet',
    text: 'Ensure your wallet is funded with ETHEREUM and connected to UniSwap for seamless transactions.',
    button: 'Uni Swap',
  },
  {
    imgSrc: swap,
    heading: 'Swap $HAI',
    text: 'Once all good, paste $HAI Contract Address, enter purchase amount, set slippage to 7-10%, and confirm swap!',
    button: 'Meta Mask',
  },
];

let contractAddress = '0x0000000000000000000000000000000000000000';

function HowToBuy() {
  return (
    <section id='howTo'>
      <div className='how-to-text'>
        <p className='how-to-heading'>
          How
          <span
           className='to'
          > to
          </span> buy $HAI?
        </p>

        <div className='copy-box'>
          <p className='address'>contractAddress: {contractAddress} </p>
          <img src={copyIcon} className='copy-icon' alt='' />
        </div>
      </div>
      <div className='how-to-group'>
        <img src={HalfRing} className='half-ring'/>
        <img src={waveFour} className='waveFour'/>
        <img src={redGlass} className='red-glass'/>
        {services.map((feature, index) => (
          <div className='how-feature' key={index}>
            <img
              src={feature.imgSrc}
              className='use-f-img'
              alt={feature.heading}
            />
            <p className='how-heading'>{feature.heading}</p>
            <p className='how-text'>{feature.text}</p>
            <button id={feature.index} className='how-to-btn'>
              {feature.button}
            </button>
          </div>
        ))}
      </div>
      <img src={waveOne} className='howWave'/>
      <div className='slider-container'>
        <div className='slider'>
         <div className="slide">
         <img src={dextool} alt='' />
         </div>
         <div className="slide"> <img src={CoinGecko} alt='' /></div>
         <div className="slide">
         <img src={CoinMarket} alt='' />
         </div>
         <div className="slide">
         <img src={dextool} alt='' />
         </div>
         <div className="slide"> <img src={CoinGecko} alt='' /></div>
         <div className="slide">
         <img src={CoinMarket} alt='' />
         </div>
          
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
