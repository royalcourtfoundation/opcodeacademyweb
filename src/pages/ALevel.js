import React from 'react'
import { Link } from 'react-router-dom'
import IMG_Course12 from '../assets/img/CourseImages/IMG_Course12.svg'
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import Icon_Duration from '../assets/img/icons/Icon_Duration.png'
import Icon_Certifications from '../assets/img/icons/Icon_Certifications.png'
import Icon_Project from '../assets/img/icons/Icon_Project.png'
import Icon_Topics from '../assets/img/icons/Icon_Topics.png'
export default function ALevel() {
    return (
        <>
            <main class="main-area fix">

                {/* <!-- breadcrumb-area --> */}
                <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb__content">
                                    <h4>A Level</h4>
                                    <nav class="breadcrumb">
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to='/'>Home</Link>
                                        </span>
                                        <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/courses">All Courses</Link>
                                        </span>
                                        <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/ALevel">A Level</Link>
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
                    <section class="courses__details-area section-py-120">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-9 col-lg-8">
                                <div className="pageImageContainer">
                                <img src={IMG_Course12} alt="img" />
                                </div>                                
                                    <div class="courses__details-content">

                                        <h2 class="title" style={{color:'#3783F3'}}>A Level</h2>
                                       
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                                <div class="courses__overview-wrap">
                                                    <h3 class="title">Course Description</h3>
                                                    <p>This 3-month "A Level" course provides in-depth knowledge and advanced understanding in subjects such as Mathematics, Science, and Humanities. Focused on critical thinking, research skills, and academic excellence, it prepares students for higher education and professional pathways. Engage in rigorous coursework, interactive lessons, and comprehensive exam preparation to achieve outstanding results in your A Level examinations.</p>
                                                    {/* <h3 class="title">What you'll learn in this course?</h3>
                                                    <ul class="about__info-list list-wrap">
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Business Analytics Using Excel</p>
                                                        </li>
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Programming Basics</p>
                                                        </li>
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Data Analytics using Python</p>
                                                        </li>
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Database using SQL</p>
                                                        </li>
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Analytics Tools Tableau/Data Studio</p>
                                                        </li>
                                                        <li class="about__info-list-item">
                                                            <i class="flaticon-angle-right"></i>
                                                            <p class="content">Data Analytics Project.3</p>
                                                        </li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4">
                                    <div class="courses__details-sidebar">
                                        <div class="courses__information-wrap">
                                            <h5 class="title">Course includes:</h5>
                                            <ul class="list-wrap">
                                                <li>
                                                    <img src={Icon_Duration} alt="img"/>
                                                    Duration
                                                    <span>3 Months</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Topics} alt="img"/>
                                                    Topics
                                                    <span></span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Certifications} alt="img"  />
                                                    Certifications
                                                    <span>Yes</span>
                                                </li>
                                                <li>
                                                    <img src={Icon_Project} alt="img"  />
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
