import React from 'react';
import './home.page.scss';
import './portfolio.page.scss';
import headerImg from '../img/portfolio-header.png';
import logo from '../img/logo.png';

const PortfolioPage = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <img className="portfolio-header-img" src={headerImg} alt="header img" />
                <img className="portfolio-header-logo" src={logo} alt="logo" />
                <div className="portfolio-header-text">
                    <h1 className="portfolio-title">With Creative from Heart</h1>
                    <p>
                        I want to welcome you to my website, where ahead you will find a fascinating
                        journey into my world in the world of web design.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
