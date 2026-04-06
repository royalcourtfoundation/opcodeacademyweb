import React from 'react'
import { Link } from 'react-router-dom'
import banner_shape01 from '../assets/img/banner/banner_shape01.png'
import ImageAboutUs from '../assets/img/Images/ImageAboutUs.jpg'

export default function AboutUs() {
    return (
        <>
            {/* <!-- breadcrumb-area --> */}
            <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb__content">
                                <h4>About Us</h4>
                                <nav class="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to='/'>Home</Link>
                                    </span>
                                    <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/aboutus">About Us</Link>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="breadcrumb__shape-wrap">
                    <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" class="alltuchtopdown" />
                    <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                    <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                    <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                    <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
                </div>
            </div>
            {/* <!-- breadcrumb-area-end --> */}
            {/* <!-- about-us-area --> */}

            <div className='container'>
                <section className="courses__details-area section-py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="pageImageContainer">
                                    <img src={ImageAboutUs} alt="Business Partnership" />
                                </div>
                                <div className="courses__details-content">

                                    <h2 className="title mt-2" style={{ color: '#3783F3' }}>Who We Are</h2>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex="0">
                                            <div className="courses__overview-wrap">

                                                <p>Welcome to our platform where we are dedicated to providing top-notch education and training services. Our mission is to help you achieve your career goals through expertly designed courses and workshops. With a team of experienced tutors and a variety of learning options, we strive to create a valuable learning experience for everyone.</p>

                                                <h3 className="title">Our Vision</h3>
                                                <p>Our vision is to be the leading educational platform that empowers learners to excel in their careers through innovative and effective learning solutions.</p>
                                                <h3 className="title">Our Mission</h3>
                                                <p>Our mission is to deliver high-quality educational programs and workshops that cater to the needs of our diverse audience, ensuring they gain the skills and knowledge required to succeed.</p>
                                                <h3 className="title">Our Values</h3>
                                                <ul>
                                                    <li>Excellence in Education</li>
                                                    <li>Commitment to Learners</li>
                                                    <li>Innovation and Improvement</li>
                                                    <li>Integrity and Transparency</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- about-us-area-end --> */}
        </>
    )
}
