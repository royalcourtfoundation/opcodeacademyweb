import React from 'react'
import secondary_logo from '../assets/img/logo/secondary_logo.png';
import facebook from '../assets/img/icons/facebook.svg';
import twitter from '../assets/img/icons/twitter.svg';
import whatsapp from '../assets/img/icons/whatsapp.svg';
import instagram from '../assets/img/icons/instagram.svg';
import youtube from '../assets/img/icons/youtube.svg';
import googleplay from '../assets/img/others/google-play.svg';
import applestore from '../assets/img/others/apple-store.svg';
import IconPiterest from '../assets/img/icons/IconPiterest.png';
import xtwitter from '../assets/img/icons/xtwitter.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    const phoneNumber = '+919696668952';
    const message = 'Hello, I am interested in learning more about the courses offered at OPCODE Academy. Could you please provide more details on the available programs and enrollment procedures? Thank you!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <>
            <footer className="footer__area">
                <div className="footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer__widget">
                                    <div className="logo mb-35">
                                        <Link to="/"><img src={secondary_logo} alt="img" /></Link>
                                    </div>
                                    <div className="footer__content">
                                        <ul className="list-wrap">
                                            <li>Royal Court, Awadh Enclave Colony,<br /> Hardoi Road, Dubagga Lucknow<br />Uttar pradesh- 226101</li>
                                            {/* <li>+91 9696668952 </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title">About</h4>
                                    <div className="footer__link">
                                        <ul className="list-wrap">
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><Link to="">Impact Stories</Link></li>
                                            <li><Link to="/photogallery">Gallery</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title">Media</h4>
                                    <div className="footer__link">
                                        <ul className="list-wrap">
                                            <li><Link to="">Exam Calendar</Link></li>
                                            <li><Link to="">Support</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title">Get In Touch</h4>
                                    <div className="footer__contact-content">
                                        <p>when an unknown printer took <br /> galley type and scrambled</p>
                                        <ul className="list-wrap footer__social">
                                            <li>
                                                <Link to="https://www.facebook.com/opcodeacademy" target="_blank">
                                                    <img src={facebook} alt="img" className="injectable" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://x.com/opcodeacademy" target="_blank">
                                                <img src={xtwitter} style={{ height: '15px' }} alt="img" className="injectable" />
                                                </Link>
                                            </li>
                                            <li>
                                                <li className='linkicon'>
                                                    <Link to="https://www.linkedin.com/company/opcodeacademy" target="_blank">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </Link>
                                                </li>
                                            </li>
                                            <li>
                                                <li className='linkicon_'>
                                                    <Link to="https://in.pinterest.com/opcodeacademy" target="_blank">
                                                        <img src={IconPiterest} style={{ height: '16px' }} alt="img" className="injectable_" />
                                                    </Link>
                                                </li>
                                            </li>
                                            <li>
                                                <li className='linkicon'>
                                                    <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                                        <img src={whatsapp} alt="WhatsApp" className="injectable" />
                                                    </Link>
                                                </li>
                                            </li>
                                            <li>
                                                <Link to="https://www.instagram.com/opcodeacademy" target="_blank">
                                                    <img src={instagram} alt="img" className="injectable" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.youtube.com/@opcodeacademy" target="_blank">
                                                    <img src={youtube} alt="img" className="injectable" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="app-download">
                                        <Link to=""><img src={googleplay} alt="img" /></Link>
                                        <Link to=""><img src={applestore} alt="img" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="copy-right-text">
                                    <p>©OpCode Academy All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="footer__bottom-menu">
                                    <ul className="list-wrap">
                                        <li><Link to="">Term of Use</Link></li>
                                        <li><Link to="">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
