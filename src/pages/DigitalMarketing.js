import React from 'react'
import { Link } from 'react-router-dom'
import IMG_Course8 from '../assets/img/CourseImages/IMG_Course8.svg'
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import Icon_Duration from '../assets/img/icons/Icon_Duration.png'
import Icon_Certifications from '../assets/img/icons/Icon_Certifications.png'
import Icon_Project from '../assets/img/icons/Icon_Project.png'
import Icon_Topics from '../assets/img/icons/Icon_Topics.png'
export default function DigitalMarketing() {
    return (
        <>
            <main className="main-area fix">

                {/* <!-- breadcrumb-area --> */}
                <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h4>Digital Marketing</h4>
                                    <nav className="breadcrumb">
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to='/'>Home</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/courses">All Courses</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/DigitalMarketing">Digital Marketing</Link>
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb__shape-wrap">
                        <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" className="alltuchtopdown" />
                        <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                        <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                        <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                        <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
                    </div>
                </div>
                {/* <!-- breadcrumb-area-end --> */}

                <div className='container'>
                    <section className="courses__details-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-8">
                                    <div className="pageImageContainer">
                                        <img src={IMG_Course8} alt="img" />
                                    </div>
                                    <div className="courses__details-content">

                                        <h2 className="title" style={{ color: '#3783F3' }}>Digital Marketing</h2>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                                <div className="courses__overview-wrap">
                                                    <h3 className="title mt-2">Course Description</h3>
                                                    <p>Embark on a transformative journey in Digital Marketing with our dynamic 3-month course. From mastering the fundamentals of Website Development and SEO to crafting compelling content strategies and exploring the power of PPC and Social Media platforms, you'll learn to navigate the digital landscape with finesse. With hands-on experience in Web Analytics, Marketing Automation, and Mobile SEO, you'll be equipped to orchestrate impactful digital marketing campaigns that drive results.</p>
                                                    <h3 className="title">What you'll learn in this course?</h3>
                                                    <ul className="about__info-list list-wrap">
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Overview of Digital Marketing</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Basics of Website Development</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Introduction to SEO</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Content Creation and Strategy</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Social Media Platforms Overview</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content"> Introduction to PPC</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content"> Monitoring Online Presence</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content"> Understanding Web Analytics</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Introduction to Marketing Automation</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Introduction to Marketing Automation</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content"> Mobile SEO and App Store Optimization</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Digital Marketing Campaigns</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <div className="courses__details-sidebar">
                                        <div className="courses__information-wrap">
                                            <h5 className="title">Course includes:</h5>
                                            <ul className="list-wrap">
                                                <li>
                                                    <img src={Icon_Duration} alt="img" />
                                                    Duration
                                                    <span>3 Months</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Topics} alt="img" />
                                                    Topics
                                                    <span>12</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Certifications} alt="img" />
                                                    Certifications
                                                    <span>Yes</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Project} alt="img" />
                                                    Project
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <!-- newsletter-area --> */}
                <section className="newsletter__area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="newsletter__img-wrap">
                                    <img src={newsletter_img} alt="img" />
                                    <img src={newsletter_shape01} alt="img" data-aos="fade-up" data-aos-delay="400" />
                                    <img src={newsletter_shape02} alt="img" className="alltuchtopdown" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="newsletter__content">
                                    <h2 className="title">Want to stay <span>informed</span> about <br /> new <span>courses & study?</span></h2>
                                    <div className="newsletter__form">
                                        <form action="#">
                                            <input type="email" placeholder="Type your e-mail" />
                                            <button type="submit" className="btn">Subscribe Now <i className='fa fa-arrow-right'></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter__shape">
                        <img src={newsletter_shape03} alt="img" data-aos="fade-left" data-aos-delay="400" />
                    </div>
                </section>
                {/* <!-- newsletter-area-end --> */}
            </main>
        </>
    )
}
