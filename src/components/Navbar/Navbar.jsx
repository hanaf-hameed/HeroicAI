import React, { useState, useEffect } from 'react';
import HeroicLogo from '../../assets/heroicaiLogo.png';
import telegram from '../../assets/TelegramIcon.svg';
import "./Navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#Home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (event, link) => {
        event.preventDefault(); // Prevent default behavior of anchor tag

        setActiveLink(link);
        setIsOpen(false);
    
        const targetSection = document.querySelector(link);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
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
        <>
            <div className='navbar'>
                <img src={HeroicLogo} className='logo' alt='Logo' />
                <ul className='navbar-menu'>
                    <li><a href='#Home' className={activeLink === '#Home' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Home')}>Home</a></li>
                    <li><a href='#Feature' className={activeLink === '#Feature' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Feature')}>Feature</a></li>
                    <li><a href='#Tokenomics' className={activeLink === '#Tokenomics' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Tokenomics')}>Tokenomics</a></li>
                    <li><a href='#Roadmap' className={activeLink === '#Roadmap' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Roadmap')}>Roadmap</a></li>
                    <li><a href='#Whitepaper' className={`whitepaper ${activeLink === '#Whitepaper' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, '#Whitepaper')}>Whitepaper <span className='message'>Coming soon</span></a></li>
                </ul>
                <div className='nav-right'>
                    <img src={telegram} className='telegram' alt='Telegram' />
                    <button className='launchApp-btn whitepaper'>Launch App<span className='message'>Coming soon</span></button>
                    <div className={`hamburger-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <div className={`menu ${isOpen ? 'active' : ''}`}>
                        <div className='close-icon' onClick={toggleMenu}>&times;</div>
                        <a href="#Home" className={activeLink === '#Home' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Home')}><span className='item-hover'>Home</span></a>
                        <a href="#Feature" className={activeLink === '#Feature' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Feature')}><span className='item-hover'>Feature</span></a>
                        <a href="#Tokenomics" className={activeLink === '#Tokenomics' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Tokenomics')}><span className='item-hover'>Tokenomics</span></a>
                        <a href="#Roadmap" className={activeLink === '#Roadmap' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Roadmap')}><span className='item-hover'>Roadmap</span></a>
                        <a href="#Whitepaper" className={activeLink === '#Whitepaper' ? 'active' : ''} onClick={(e) => handleLinkClick(e, '#Whitepaper')}><span className='item-hover'>Whitepaper</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
