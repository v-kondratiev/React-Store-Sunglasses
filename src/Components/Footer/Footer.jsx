import React from 'react';
import style from '../Footer/Footer.module.scss';
import insta from '../../assets/instagram.svg';
import linkedin from '../../assets/LinkedIn.svg';
import twitter from '../../assets/Twitter.svg';
import fb from '../../assets/Facebook.svg';
import youtube from '../../assets/Youtube.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.footer__col}>
                        <h4>Shopping</h4>
                        <ul>
                            <li>
                                <a href="">My Account</a>
                            </li>
                            <li>
                                <a href="">Sign Up for Email</a>
                            </li>
                            <li>
                                <a href="">Discounts & Promotions</a>
                            </li>
                            <li>
                                <a href="">Product Portfolio</a>
                            </li>
                            <li>
                                <a href="">Warranty Policy</a>
                            </li>
                            <li>
                                <a href="">Return Policy</a>
                            </li>
                            <li>
                                <a href="">Financing Options</a>
                            </li>
                            <li>
                                <a href="">Shopping FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer__col}>
                        <h4>Programs</h4>
                        <ul>
                            <li>
                                <a href="">Business Account Benefits</a>
                            </li>
                            <li>
                                <a href="">Data Recovery</a>
                            </li>
                            <li>
                                <a href="">Recycle Program</a>
                            </li>
                            <li>
                                <a href="">Western Digital Credit</a>
                            </li>
                            <li>
                                <a href="">Partner Programs</a>
                            </li>
                            <li>
                                <a href="">Affiliate Program</a>
                            </li>
                            <li>
                                <a href="">Philanthropic Programs</a>
                            </li>
                            <li>
                                <a href="">Western Digital Capital</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer__col}>
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">News & Events</a>
                            </li>
                            <li>
                                <a href="">Leadership</a>
                            </li>
                            <li>
                                <a href="">Corporate Responsibility</a>
                            </li>
                            <li>
                                <a href="">Privacy Center</a>
                            </li>
                            <li>
                                <a href="">Office Locations</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.footer__col}>
                        <div className={style.link__support}>
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="">Get Help</a>
                                </li>
                                <li>
                                    <a href="">Resource Library</a>
                                </li>
                                <li>
                                    <a href="">Product Security</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.link__store}>
                            <p>Online Store Support:</p>
                            <p>US 855-493-7867</p>
                            <p>Monday — Friday, 8am — 5pm PST</p>
                        </div>
                        <div className={style.social__links}>
                            <a href="#"><img src={insta} alt="#"/></a>
                            <a href="#"><img src={linkedin} alt="#"/></a>
                            <a href="#"><img src={twitter} alt="#"/></a>
                            <a href="#"><img src={fb} alt="#"/></a>
                            <a href="#"><img src={youtube} alt="#"/></a>
                        </div>
                    </div>
                </div>
                <div className={style.footer__bottom}>
                    ©{new Date().getFullYear()} Logo Ipsum Corporation or its affiliates. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;