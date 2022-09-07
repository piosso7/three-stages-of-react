import React from 'react';
import './home.page.scss';
import './portfolio.page.scss';
import headerImg from '../img/portfolio-header.png';
import logo from '../img/logo.png';
import aboutMeImg from '../img/portfolio-content-about-me.png';
import skillOne from '../img/portfolio-skill-1.png';
import skillTwo from '../img/portfolio-skill-2.png';
import skillThree from '../img/portfolio-skill-3.png';

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
            <div className="portfolio-content">
                <section className="portfolio-about-me">
                    <h2>About Me</h2>
                    <div>
                        <p>
                            My name is Vlad Musienko, Im a web designer. I love to draw, and
                            everything to do with design. About 5 years I have been designing sites
                            of varying complexity, the main lines of this corporate websites,
                            portfolio, wordpress templates and online stores. My portfolio you can
                            look at websites such as the dribbble and behance. Have extensive
                            experience both in Ukraine, CIS countries and foreign market.
                        </p>
                        <p>
                            In my portfolio you can find work people use around the world, Japan,
                            Thailand, London, France, Turkey, Kiev, Moscow, etc. I love the
                            simplicity in the design of web sites. As I see it, people, its like my
                            job. Of course dont want to rest on our laurels and will continue
                            further studies to improve their skills, creating new interesting
                            creative projects.
                        </p>
                    </div>
                </section>
                <img className="portfolio-about-me-img" src={aboutMeImg} />
                <section className="portfolio-what-i-do">
                    <div className="what-i-do-title">
                        <h2>What I Do</h2>
                        <p>
                            My greatest strengths which I dedicate most of the time, which exalt and
                            whom garius.
                        </p>
                    </div>
                    <div className="what-i-do-skills">
                        <div>
                            <img src={skillOne} />
                            <h3>Template.</h3>
                            <p>
                                Lately, I often create templates for WordPress. You can use for
                                personal purposes or to sell on sites such as themeforest.
                            </p>
                        </div>
                        <div>
                            <img src={skillTwo} />
                            <h3>Brand.</h3>
                            <p>
                                Creating a brand is a very complex process aimed at the creation and
                                positioning the unique persons of the company, its products and
                                services.
                            </p>
                        </div>
                        <div>
                            <img src={skillThree} />
                            <h3>Dreams.</h3>
                            <p>
                                Everyone is able to destroy the dream, but not everyone is able to
                                create it. I try to help people in its definition as a person and
                                specialist.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="portfolio-my-work"></section>
                <section className="portfolio-photography"></section>
                <section className="portfolio-contact"></section>
            </div>
        </div>
    );
};

export default PortfolioPage;
