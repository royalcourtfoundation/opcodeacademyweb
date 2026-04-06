import React from 'react'
import { Link } from 'react-router-dom'
import img_php from '../assets/img/others/img_php.svg'
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import Icon_Duration from '../assets/img/icons/Icon_Duration.png'
import Icon_Certifications from '../assets/img/icons/Icon_Certifications.png'
import Icon_Project from '../assets/img/icons/Icon_Project.png'
import Icon_Topics from '../assets/img/icons/Icon_Topics.png'
export default function CourseMBA() {
    return (
        <>
            <main className="main-area fix">

                {/* <!-- breadcrumb-area --> */}
                <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h4>Master of Business Administration (MBA)</h4>
                                    <nav className="breadcrumb">
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to='/'>Home</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/postgraduate">Undergraduate courses</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/CourseMBA">Master of Business Administration (MBA)</Link>
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
                                        <img src={img_php} alt="img" />
                                    </div>
                                    <div className="courses__details-content">

                                        <h2 className="title mt-2" style={{ color: '#3783F3' }}>Master of Business Administration (MBA)</h2>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                                <div className="courses__overview-wrap">
                                                    <h3 className="title">Course Description</h3>
                                                    <p>The Master of Business Administration (MBA) is a 2-year postgraduate program that provides in-depth
                                                        knowledge of business management and strategy. With specializations in Marketing,
                                                        Finance, HR, Operations, and Entrepreneurship, the program prepares students for
                                                        leadership roles in the corporate world. Case studies, internships, and live projects
                                                        enhance real-world business acumen.</p>
                                                    <h3 className="title">What you'll learn in this course?</h3>
                                                    <ul className="about__info-list list-wrap">

                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Strategic management and leadership skills.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Advanced financial management and investment strategies.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Marketing analytics and digital marketing tools.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Human resource management and organizational behavior.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Operations and supply chain management.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Business analytics and data-driven decision-making.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Entrepreneurship and business plan development.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">International business and trade practices.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Corporate ethics and governance.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Internship and capstone project in chosen specialization.</p>
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
                                                    <span>2 Years</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Topics} alt="img" />
                                                    Topics
                                                    <span>30+ (Strategic Management, Finance, Marketing, etc.)</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Certifications} alt="img" />
                                                    Certifications
                                                    <span>Yes (Certifications in Six Sigma, Digital Marketing, etc.)</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Project} alt="img" />
                                                    Project
                                                    <span>Yes (Major Business Strategy Project)</span>
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
