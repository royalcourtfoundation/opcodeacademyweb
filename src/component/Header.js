import React, { useState } from 'react'
import map_marker from '../assets/img/icons/map_marker.svg';
import envelope from '../assets/img/icons/envelope.svg';
import phone from '../assets/img/icons/phone.svg';
import logo from '../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import IconPiterest from '../assets/img/icons/IconPiterest.png';
import instagram from '../assets/img/icons/instagram.svg';
import xtwitter from '../assets/img/icons/xtwitter.svg';
export default function Header() {

    let [menuOpen, setMenuOpen] = useState(0)

    const phoneNumber = '+919696668952';
    const message = 'Hello, I am interested in learning more about the courses offered at OPCODE Academy. Could you please provide more details on the available programs and enrollment procedures? Thank you!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    return (
        <>
            <header>
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li><img src={map_marker} alt="Icon" /> <span>819/027 Awadh Enclave Colony, Hardoi Road, Dubagga Lucknow</span></li>
                                    <li><img src={envelope} alt="Icon" /> <a href="mailto:opcodeacademy@gmail.com">opcodeacademy@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tg-header__top-right">
                                    <div className="tg-header__phone">
                                        <img src={phone} alt="Icon" />Call us: <a href="tel:+91 9696668952">+91 9696668952</a>
                                    </div>
                                    <ul className="tg-header__top-social list-wrap">
                                        <li>Follow Us On :</li>
                                        <li><Link to="https://www.facebook.com/opcodeacademy" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="https://x.com/opcodeacademy" target="_blank"><img src={xtwitter} style={{ height: '15px' }} alt="img" className="injectable" /></Link></li>
                                        <li><Link to="https://www.linkedin.com/company/opcodeacademy" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li>
                                            <Link to="https://in.pinterest.com/opcodeacademy" target="_blank">
                                                <img src={IconPiterest} style={{ height: '15px' }} alt="img" className="injectable_" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/opcodeacademy" target="_blank">
                                                <img src={instagram} alt="img" className="injectable" />
                                            </Link>
                                        </li>
                                        <li><Link to={whatsappUrl} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Link></li>
                                        <li><Link to="https://www.youtube.com/@opcodeacademy" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-fixed-height"></div>
                <div id="sticky-header" className="tg-header__area">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo mainlogo">
                                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                                        </div>
                                        <div
                                            // className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex" 
                                            className={`tgmenu__navbar-wrap tgmenu__main-menu d-xl-flex menuless1200 ${menuOpen === 1 ? 'd-block' : 'd-none'}`}
                                        // style={{display: menuOpen === 1 ? 'block !important' : 'block !important'}}
                                        // style={{display:'block !important', background:'red'}}
                                        >
                                            <ul className="navigation">
                                                <li onClick={() => { setMenuOpen(0) }} className='d-none closeBtn'><Link to="#"><i className='tg-flaticon-close'></i></Link></li>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/aboutus">About Us</Link></li>
                                                <li className="menu-item-has-children"><Link to="#">Courses</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link to='/undergraduate'>Undergraduate</Link></li>
                                                        <li><Link to='/postgraduate'>Postgraduate</Link></li>
                                                        <li><Link to='/diploma'>Diploma</Link></li>
                                                        <li><Link to='/certification'>Certification</Link></li>
                                                        <li><Link to='/nielit'>NIELIT</Link></li>
                                                        <li><Link to='/digital-health-academy' target='_blank'>Helthcare Informatics</Link></li>
                                                    </ul>
                                                </li>
                                                {/* <li><Link to="/courses">Courses</Link></li> */}
                                                <li><Link to="/businesspartnership">Business Partnership</Link></li>
                                                <li><Link to="/Archieve">Archieve</Link></li>
                                                <li><Link to="/photogallery">Gallery</Link></li>
                                                <li><Link to="/contactus">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                        <div className="tgmenu__search d-none d-md-block">
                                            <form action="#" className="tgmenu__search-form">
                                                <div className="input-grp">
                                                    <input type="text" placeholder="Search For Course . . ." />
                                                    <button type="submit"><i className="flaticon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="mobile-nav-toggler" onClick={() => { setMenuOpen(1) }}><i className="tg-flaticon-menu-1"></i></div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
