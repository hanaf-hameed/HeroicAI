import React from 'react';
import twiterIcon from "../../assets/twiter.svg"
import mediumIcon from "../../assets/medium.svg"
import icon4 from "../../assets/icon3.svg"
import telegramIcon from "../../assets/telegram.svg"
import "./Footer.css"
function Footer() {
  return (
    <section id='footer'>
      <div class='footer-glow'></div>
      {/*  glow effect */}
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-left'>
            <p className='footer-l-text'>
              Experience unparalleled efficiency in cloud management with Heroic
              AI and unlock additional benefits through strategic investments in
              $HAI. Enter your email below to receive exciting updates about our
              bot and token!
            </p>
            <div className='footer-l-input'>
              <input
                className='footer-input'
                type='text'
                placeholder='Your Email'
              />
              <button className='input-btn'>Send</button>
            </div>
          </div>
          <div className='footer-right'>
            <div className='lists'>
              <div className='list'>
                <p className='list-name'>Product</p>
                <ul>
                  <li>
                    <a href='#'>Domain</a>
                  </li>
                  <li>
                    <a href='#'>Hosting</a>
                  </li>
                  <li>
                    <a href='#'>Website</a>
                  </li>
                  <li>
                    <a href='#'>Nodes</a>
                  </li>
                </ul>
              </div>

              <div className='list'>
                <p className='list-name'>Business</p>
                <ul>
                  <li>
                    <a href='#'>Feature</a>
                  </li>
                  <li>
                    <a href='#'>Tokenomics</a>
                  </li>
                  <li>
                    <a href='#'>Roadmap</a>
                  </li>
                  <li>
                    <a href='#'>Whitepaper</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='icons'>
              <img className='bottom-icon' src={twiterIcon} alt='' />
              <img className='bottom-icon' src={telegramIcon} alt='' />
              <img className='bottom-icon' src={mediumIcon} alt='' />
              <img className='bottom-icon' src={icon4} alt='' />
            </div>
          </div>
        </div>
        <div className='bottom-border'></div>
        <p className='copyright'>
          Copyright © 2024 Heroic AI - All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
