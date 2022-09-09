import React from 'react';
import './home.page.scss';
import './portfolio.page.scss';
import headerImg from '../img/portfolio-header.png';
import logo from '../img/logo.png';
import aboutMeImg from '../img/portfolio-content-about-me.png';
import skillOne from '../img/portfolio-skill-1.png';
import skillTwo from '../img/portfolio-skill-2.png';
import skillThree from '../img/portfolio-skill-3.png';
import workOne from '../img/portfolio-work-1.png';
import workTwo from '../img/portfolio-work-2.png';
import workThree from '../img/portfolio-work-3.png';
import workFour from '../img/portfolio-work-4.png';
import photoOne from '../img/portfolio-photo1.png';
import photoTwo from '../img/portfolio-photo2.png';
import photoThree from '../img/portfolio-photo3.png';

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
                <section className="portfolio-my-work">
                    <div className="my-work-title">
                        <h2>My Work</h2>
                        <p>
                            I present to you some of my recent work, more works can be found in my
                            profile on behanсe
                        </p>
                    </div>
                    <div className="my-work-gallery">
                        <div className="firstColumn">
                            <div>
                                <img src={workOne} />
                                <h3>Corporate.</h3>
                                <p>
                                    Complete redesign of the site travel company. The main
                                    requirement was to get a stylish and comfortable design.
                                </p>
                            </div>
                            <div>
                                <img src={workTwo} />
                                <h3>Agency.</h3>
                                <p>
                                    We have created a new product that will help designers,
                                    developers and companies create websites.
                                </p>
                            </div>
                        </div>
                        <div className="secondColumn">
                            <div>
                                <img src={workThree} />
                                <h3>Knigiws.</h3>
                                <p>
                                    Recently the library in electronic formats were the prerogative
                                    of the state agencies.
                                </p>
                            </div>
                            <div>
                                <img src={workFour} />
                                <h3>One Story.</h3>
                                <p>
                                    An excellent choice for freelancers, photographers, startups,
                                    personal portfolios, blogs and landing pages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button>More work</button>
                </section>
                <section className="portfolio-photography">
                    <div className="photography-title">
                        <h2>Photography</h2>
                        <p>
                            In my life there is a place for photos. I love to share experiences and
                            beautiful moments of your life with others.
                        </p>
                    </div>
                    <div className="photography-gallery">
                        <img src={photoOne} />
                        <img src={photoTwo} />
                        <img src={photoThree} />
                    </div>
                    <button>More photo</button>
                </section>
                <section className="portfolio-contact">
                    <div className="contact-title">
                        <h2>Say Hello</h2>
                        <p>
                            If you are interested in my services and would like additional
                            information, feel free to email me.
                        </p>
                    </div>
                    <form>
                        <input className="input-name" type="text" placeholder="Name" />
                        <input className="input-email" type="email" placeholder="Email" />
                        <input className="input-subject" type="text" placeholder="Subject" />
                        <textarea></textarea>
                    </form>
                    <button>To send</button>
                </section>
            </div>
            <div className="portfolio-footer">
                <p>Made With Love</p>
                <p>©2016 All rights reserved</p>
            </div>
        </div>
    );
};

export default PortfolioPage;
