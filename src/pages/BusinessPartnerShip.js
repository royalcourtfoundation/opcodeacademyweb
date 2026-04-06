import React from 'react'
import { Link } from 'react-router-dom'
import img_php from '../assets/img/Images/img_BusinessPartener.jpg'
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import Icon_Duration from '../assets/img/icons/Icon_Duration.png'
import Icon_Certifications from '../assets/img/icons/Icon_Certifications.png'
import Icon_Project from '../assets/img/icons/Icon_Project.png'
import Icon_Topics from '../assets/img/icons/Icon_Topics.png'

export default function BusinessPartnerShip() {
    return (
        <>
            {/* <!-- breadcrumb-area --> */}
            <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb__content">
                                <h4>Business Partnership</h4>
                                <nav class="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to='/'>Home</Link>
                                    </span>
                                    <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/businesspartnership">Business Partnership</Link>
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
            <div className='container'>
                <section className="courses__details-area section-py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="pageImageContainer">
                                    <img src={img_php} alt="Business Partnership" />
                                </div>
                                <div className="courses__details-content">

                                    <h2 className="title mt-2" style={{ color: '#3783F3' }}>Franchise Opportunity with OPCODE Academy</h2>

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex="0">
                                            <div className="courses__overview-wrap">
                                                <h3 className="title">Are you passionate about technology and education?</h3>
                                                <p>Do you aspire to own a successful business in the thriving field of computer education? Join hands with OPCODE Academy, a renowned computer professional institute, and become a part of our expanding network of franchisees.</p>
                                                
                                                <h3 className="title">About Us</h3>
                                                <p>OPCODE Academy has been at the forefront of computer education, offering top-notch training programs that empower individuals with the skills needed to excel in the digital age. With a proven track record of excellence, we specialize in courses ranging from basic computer literacy to advanced software development, networking, and cybersecurity.</p>

                                                <h3 className="title">Why Franchise with Us?</h3>
                                                <ul className='frenchiseul'>
                                                    <li>
                                                        <h4>1. Established Brand and Reputation</h4>
                                                        <ul>
                                                            <li>Leverage our well-known brand and reputation for delivering high-quality computer education.</li>
                                                            <li>Benefit from our extensive experience and industry recognition.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h4>2. Comprehensive Training Programs</h4>
                                                        <ul>
                                                            <li>Access our carefully crafted curriculum designed by industry experts.</li>
                                                            <li>Offer a wide range of courses that cater to beginners, intermediate learners, and advanced professionals.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h4>3. Ongoing Support and Training</h4>
                                                        <ul>
                                                            <li>Receive comprehensive initial training to set up and manage your franchise successfully.</li>
                                                            <li>Benefit from continuous support, including marketing, operations, and technical assistance.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h4>4. Marketing and Promotional Support</h4>
                                                        <ul>
                                                            <li>Utilize our proven marketing strategies to attract and retain students.</li>
                                                            <li>Get access to professionally designed promotional materials and campaigns.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h4>5. State-of-the-Art Infrastructure</h4>
                                                        <ul>
                                                            <li>Set up your institute with the latest technology and equipment.</li>
                                                            <li>Provide a conducive learning environment with modern classrooms and labs.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h4>6. Strong Demand and Growing Market</h4>
                                                        <ul>
                                                            <li>Tap into the growing demand for computer education and professional training.</li>
                                                            <li>Cater to a diverse audience, including students, professionals, and corporate clients.</li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h3 className="title">Ideal Franchisee Profile</h3>
                                                <ul className='frenchiseul'>
                                                    <li>A passion for education and technology.</li>
                                                    <li>Strong business acumen and commitment to maintaining high standards.</li>
                                                    <li>Adequate financial resources to invest in the franchise.</li>
                                                    <li>A dedication to providing excellent customer service.</li>
                                                </ul>

                                                <h3 className="title">Franchise Details</h3>
                                                <ul className='frenchiseul'>
                                                    <li><strong>Investment Required</strong>
                                                        <ul>
                                                            <li>Initial Franchise Fee: <i class="fas fa-rupee-sign" style={{fontSize:'13px', padding:'0px 5px'}}></i>50,000</li>
                                                            <li>Setup Cost: As per your student capacity</li>
                                                            <li>Royalty Fee: 10%</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong>Franchise Benefits</strong>
                                                        <ul>
                                                            <li>Exclusive territorial rights.</li>
                                                            <li>Comprehensive training and support.</li>
                                                            <li>Access to our proprietary curriculum and training materials.</li>
                                                            <li>Marketing and advertising assistance.</li>
                                                            <li>Ongoing operational support.</li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h3 className="title">Join Us Today</h3>
                                                <p>Take the first step towards owning a rewarding and profitable business with OPCODE Academy. Partner with us and contribute to shaping the future of technology education.</p>
                                                <p>For more information on our franchise opportunity, please mail us: <a href="mailto:opcodeacademy@gmail.com">opcodeacademy@gmail.com</a></p>
                                            </div>
                                        </div>
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
        </>
    )
}
