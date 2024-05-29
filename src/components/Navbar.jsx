import React, { useState, useEffect } from 'react';
import HeroicLogo from '../assets/heroicaiLogo.png';
import telegram from '../assets/TelegramIcon.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                window.scrollTo(0, 0); // Scroll to top when menu is open
            }
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div>
            <div className='navbar'>
                <img src={HeroicLogo} className='logo' alt='Logo' />
                <ul className='navbar-menu'>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Feature'>Feature</a></li>
                    <li><a href='#Tokenomics'>Tokenomics</a></li>
                    <li><a href='#Roadmap'>Roadmap</a></li>
                    <li><a href='#' className='whitepaper'>Whitepaper <span className='message'>Coming soon</span></a>
                   
                    </li>
                </ul>
                <div className='nav-right'>
                    <img src={telegram} className='telegram' alt='Telegram' />
                    <button className='launchApp-btn whitepaper'>Launch App<span className='message'>Coming soon</span></button>
                    <div className={`hamburger-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        {isOpen ? <>&times;</> : <>&#9776;</>}
                    </div>
                    <div className={`menu ${isOpen ? 'active' : ''}`}>
                        <a href="#Home" onClick={toggleMenu}>Home</a>
                        <a href="#Feature" onClick={toggleMenu}>Feature</a>
                        <a href="#Tokenomics" onClick={toggleMenu}>Tokenomics</a>
                        <a href="#Roadmap" onClick={toggleMenu}>Roadmap</a>
                        <a href="#" onClick={toggleMenu}>Whitepaper</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
