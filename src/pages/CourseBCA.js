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
export default function CourseBCA() {
    return (
        <>
            <main className="main-area fix">

                {/* <!-- breadcrumb-area --> */}
                <div className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb__content">
                                    <h4>Bachelor of Computer Applications (BCA)</h4>
                                    <nav className="breadcrumb">
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to='/'>Home</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/undergraduate">Undergraduate courses</Link>
                                        </span>
                                        <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/CourseBCA">Bachelor of Computer Applications (BCA)</Link>
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

                                        <h2 className="title mt-2" style={{ color: '#3783F3' }}>Bachelor of Computer Applications (BCA)</h2>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                                <div className="courses__overview-wrap">
                                                    <h3 className="title">Course Description</h3>
                                                    <p>"Bachelor of Computer Applications (BCA)" is a 3-year undergraduate program designed to provide students with a solid foundation
                                                        in computer applications and information technology. The course covers core concepts such as programming languages,
                                                        database management, networking, software development, web technologies, and data structures. Through hands-on projects
                                                        and practical training, students gain expertise in designing and implementing IT solutions.The BCA program nurtures
                                                        problem-solving skills, teamwork, and ethical IT practices, enabling students to become competent professionals in today’s
                                                        digital age.</p>
                                                    <h3 className="title">What you'll learn in this course?</h3>
                                                    <ul className="about__info-list list-wrap">
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Programming languages like C, C++, Java, and Python.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Database management using SQL and Oracle.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Software engineering and development processes.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Fundamentals of computer networks and networking protocols.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Data structures and algorithms for problem-solving.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Web development using HTML, CSS, and JavaScript.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Mobile application and cloud-based technologies.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Introduction to AI, Machine Learning, and Cybersecurity.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Project management and system analysis.</p>
                                                        </li>
                                                        <li className="about__info-list-item">
                                                            <i className="flaticon-angle-right"></i>
                                                            <p className="content">Capstone project to demonstrate technical expertise.</p>
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
                                                    <span>3 Years</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Topics} alt="img" />
                                                    Topics
                                                    <span>35+ (Programming, Networking, Databases, AI/ML, etc.)</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Certifications} alt="img" />
                                                    Certifications
                                                    <span>Yes (Optional Certifications in Technologies like Python, Java, etc.)</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Project} alt="img" />
                                                    Project
                                                    <span>Yes (Capstone Project in Final Year)</span>
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
