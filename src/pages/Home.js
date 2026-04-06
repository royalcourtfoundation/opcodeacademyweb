import React, { useEffect, useState } from 'react'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import banner_bg from '../assets/img/banner/banner_bg.png'
import title_shape from '../assets/img/objects/title_shape.svg'
import banner_img from '../assets/img/banner/banner_img.png'
import banner_shape01 from '../assets/img/banner/banner_shape01.png'
import banner_shape01svg from '../assets/img/banner/banner_shape01.svg'
import banner_shape02 from '../assets/img/banner/banner_shape02.png'
import bg_dots from '../assets/img/banner/bg_dots.svg'
import about_img from '../assets/img/others/about_img.png'
import right_arrow from '../assets/img/icons/right_arrow.svg'
import courses_bg from '../assets/img/bg/courses_bg.jpg'
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import img_django from '../assets/img/others/img_django.svg'
import img_angular from '../assets/img/others/img_angular.svg'
import img_dotnet from '../assets/img/others/img_dotnet.svg'
import img_php from '../assets/img/others/img_php.svg'
import WorkshopIcon from '../assets/img/icons/WorkshopIcon.svg'
import Artificialintelligence from '../assets/img/CourseImages/Artificialintelligence.svg'
import Brain from '../assets/img/CourseImages/Brain.svg'
import DataAnalytics from '../assets/img/CourseImages/DataAnalytics.svg'
import Datascience from '../assets/img/CourseImages/Datascience.svg'
import EarnCertificate from '../assets/img/icons/EarnCertificate.svg'
import ExpertTutors from '../assets/img/icons/ExpertTutors.svg'
import EffectiveCourses from '../assets/img/icons/EffectiveCourses.svg'
import star from '../assets/img/icons/star.png'
import HomeJourney1 from '../assets/img/others/HomeJourney1.svg'
import HomeJourney2 from '../assets/img/others/HomeJourney2.svg'
import HomeJourney3 from '../assets/img/others/HomeJourney3.svg'
import HomeJourney4 from '../assets/img/others/HomeJourney4.svg'
import courseImg from '../assets/img/UpdateCourse/Image_Course.png'

import Img_Language1 from '../assets/img/CourseImages/Img_Language1.png'
import Img_Language2 from '../assets/img/CourseImages/Img_Language2.png'
import Img_Language3 from '../assets/img/CourseImages/Img_Language3.png'
import Img_Language4 from '../assets/img/CourseImages/Img_Language4.png'
import Img_Language5 from '../assets/img/CourseImages/Img_Language5.png'
import Img_Language6 from '../assets/img/CourseImages/Img_Language6.png'
import Img_Language7 from '../assets/img/CourseImages/Img_Language7.png'
import Img_Language8 from '../assets/img/CourseImages/Img_Language8.png'
import Img_Language9 from '../assets/img/CourseImages/Img_Language9.png'
import Img_Language10 from '../assets/img/CourseImages/Img_Language10.png'
import Img_Language11 from '../assets/img/CourseImages/Img_Language11.png'
import Img_Language12 from '../assets/img/CourseImages/Img_Language12.png'
import Img_Language13 from '../assets/img/CourseImages/Img_Language13.png'
import Img_Language14 from '../assets/img/CourseImages/Img_Language14.png'
import Img_Language15 from '../assets/img/CourseImages/Img_Language15.png'
import Img_Language16 from '../assets/img/CourseImages/Img_Language16.png'

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';




export default function Home() {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
        const modalElement = document.getElementById('staticBackdrop');
        const bootstrapModal = window.bootstrap.Modal.getInstance(modalElement);

        if (bootstrapModal) {
            bootstrapModal.hide();
        }

        // Manually remove the backdrop to ensure it's gone
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    };

    useEffect(() => {
        if (showModal) {
            const modalElement = document.getElementById('staticBackdrop');
            const bootstrapModal = new window.bootstrap.Modal(modalElement);
            bootstrapModal.show();
        }
    }, [showModal]);

    return (
        <>
            <main className="main-area fix">



                {/* Modal Component */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">

                            <div className="modal-body p-3" style={{ position: 'relative' }}>
                                <div className='popupClose' onClick={handleClose} title='close'>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose} ></button> */}
                                    <span data-bs-dismiss="modal" aria-label="Close" >
                                        <i className="fa fa-times"></i>
                                    </span>
                                </div>
                                <div className='courseImg'>
                                    <img src={courseImg} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <!-- banner-area --> */}
                <section className="banner-area banner-bg tg-motion-effects" data-background={banner_bg}>
                    <div className="container">
                        <div className="row justify-content-between align-items-start">
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner__content">
                                    <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay="400">
                                        Never Stop
                                        <span className="position-relative" style={{ marginLeft: '10px' }}>
                                            <span className="svg-icon" id="banner-svg" data-svg-icon={title_shape}></span>
                                            <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                                            </svg>
                                            Learning
                                        </span>
                                        <br />Life <b>Never Stop</b> Teaching
                                    </h3>
                                    <p data-aos="fade-right" data-aos-delay="600">Every teaching and learning journey is unique Following We'll help guide your way.</p>
                                    <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay="800">
                                        <a href="#" className="btn arrow-btn">Start Free Trial <img src="assets/img/icons/right_arrow.svg" alt="img" className="injectable" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner__images">
                                    <img src={banner_img} alt="img" className="main-img" />
                                    <div className="shape big-shape" data-aos="fade-up-right" data-aos-delay="600">
                                        <img src={banner_shape01} alt="shape" className="tg-motion-effects1" />
                                    </div>
                                    <img src={bg_dots} alt="shape" className="shape bg-dots rotateme" />
                                    <img src={banner_shape02} alt="shape" className="shape small-shape tg-motion-effects3" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={banner_shape01svg} alt="shape" className="line-shape" data-aos="fade-right" data-aos-delay="1600" />
                </section>
                {/* <!-- banner-area-end --> */}

                {/* <!-- categories-area --> */}
                <section className="categories-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-7">
                                <div className="section__title text-center mb-40">
                                    <span className="titlegreen">Trending Courses</span>
                                    <h2 className="title">Top Courses We Have</h2>
                                    <p className="desc">Discover Our Premier Selection of Top Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                                {/* ####################################################   nasir */}

                                <div class="categories__wrap">
                                    <div class="swiper categories-active">
                                        <div class="swiper-wrapper topSwiper">
                                            <Swiper
                                                slidesPerView={4}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                modules={[Navigation, Autoplay]}
                                                navigation={true}
                                                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                                breakpoints={{

                                                    320: {
                                                        slidesPerView: 1,
                                                    },

                                                    480: {
                                                        slidesPerView: 2,
                                                    },

                                                    575: {
                                                        slidesPerView: 2,
                                                    },

                                                    768: {
                                                        slidesPerView: 2,
                                                    },

                                                    1024: {
                                                        slidesPerView: 3,
                                                    },

                                                    1200: {
                                                        slidesPerView: 4,
                                                    },

                                                }}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div class="swiper-slide">
                                                        <div class="categories__item">
                                                            <Link to="">
                                                                <div class="icon corseImages">
                                                                    <img src={Datascience} alt='' />
                                                                </div>
                                                                <span class="name">Data Science </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-slide">
                                                        <div class="categories__item">
                                                            <Link to="">
                                                                <div class="icon corseImages">
                                                                    <img src={Artificialintelligence} alt='' />
                                                                </div>
                                                                <span class="name">Artificial Intelligence</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-slide">
                                                        <div class="categories__item">
                                                            <Link to="">
                                                                <div class="icon corseImages">
                                                                    <img src={Brain} alt='' />
                                                                </div>
                                                                <span class="name">Machine Learning</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-slide">
                                                        <div class="categories__item">
                                                            <Link to="">
                                                                <div class="icon corseImages">
                                                                    <img src={DataAnalytics} alt='' />
                                                                </div>
                                                                <span class="name">Data Analytics</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-slide">
                                                        <div class="categories__item">
                                                            <Link to="">
                                                                <div class="icon corseImages">
                                                                    <i class="flaticon-graphic-design"></i>
                                                                </div>
                                                                <span class="name">Mobile App Development</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                {/* ####################################################   nasir */}


                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- categories-area-end --> */}



                {/* <!-- Trending Courses --> */}


                <section className="about-area tg-motion-effects section-py-120_">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-9">
                                <div className="about__images">
                                    <img src={about_img} alt="img" className="main-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about__content">
                                    <div className="section__title freeworkshp">
                                        <span className="sub-title">Free Workshop</span>
                                        <h2 className="title" style={{ color: 'black' }}>
                                            Free Workshop
                                            <span className="position-relative ms-3">
                                                <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                                                </svg>
                                                Workshops
                                            </span>
                                            on Professional Courses
                                        </h2>
                                    </div>
                                    <p className="desc">"Unlock Knowledge with Our Complimentary Workshops!"</p>
                                    <div className='worksmain'>
                                        <div className='worksmain-in'>
                                            <div className='worksmain-lt'>
                                                <span className='woksshopimg'><img src={WorkshopIcon} style={{ background: '#FF6666' }} alt='' /></span>
                                                <span className='woksshopTxt'> Smooth Virtual Live Classes</span>
                                            </div>
                                            <div className='workshopAchive mt-2'>Seamless, Interactive, and Engaging Learning Experiences.</div>
                                        </div>
                                        <div className='worksmain-in'>
                                            <div className='worksmain-lt'>
                                                <span className='woksshopimg'><img src={WorkshopIcon} style={{ background: '#1BCBE3' }} alt='' /></span>
                                                <span className='woksshopTxt'> 99% Graduation Complete</span>
                                            </div>
                                            <div className='workshopAchive mt-2'>Achieving Outstanding Success Rates for Our Students.</div>
                                        </div>
                                    </div>

                                    <div className="tg-button-wrap">
                                        <Link to href="#" className="btn arrow-btn">Quick Join Now <img src={right_arrow} alt="img" className="injectable" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Trending Courses-end --> */}

                <section className="courses-area" data-background={courses_bg}>
                    <div className="container">
                        <div className="section__title-wrap">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section__title text-center mt-5">
                                        <h2 className="title">All Language Courses</h2>
                                        <p className="desc">Discover Our Premier Selection of Top Courses</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='languageDtls mb-5'>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language1} alt='' />
                                    <span className='langName'>Data Science</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language2} alt='' />
                                    <span className='langName'>Python</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language3} alt='' />
                                    <span className='langName'>Django</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language4} alt='' />
                                    <span className='langName'>Core Java</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language5} alt='' />
                                    <span className='langName'>Advanced Java</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language6} alt='' />
                                    <span className='langName'>Android</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language7} alt='' />
                                    <span className='langName'>Kotlin</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language8} alt='' />
                                    <span className='langName'>Internet of Things</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language9} alt='' />
                                    <span className='langName'>Machine Learning</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language10} alt='' />
                                    <span className='langName'>Advance ML</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language11} alt='' />
                                    <span className='langName'>Big Data</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language12} alt='' />
                                    <span className='langName'>PHP</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language13} alt='' />
                                    <span className='langName'>Advanced PHP</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language14} alt='' />
                                    <span className='langName'>Angular</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language15} alt='' />
                                    <span className='langName'>.net</span>
                                </div>
                            </div>
                            <div className='languageDtlsinn'>
                                <div className='languageimg'>
                                    <img src={Img_Language16} alt='' />
                                    <span className='langName'>Cloud</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

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

                {/* <!-- course-area --> */}
                <section className="courses-area" data-background={courses_bg}>
                    <div className="container">
                        <div className="section__title-wrap">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section__title text-center mt-5">
                                        <span className="sub-title">Top Class Courses</span>
                                        <h2 className="title">Explore Our Best Courses</h2>
                                        <p className="desc">When known printer took a galley of type scrambl edmake</p>
                                    </div>
                                    {/* <div className="courses__nav">
                                        <ul className="nav nav-tabs" id="courseTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="softwaredevelopment-tab" data-bs-toggle="tab" data-bs-target="#softwaredevelopment-tab-pane" type="button"
                                                    role="tab" aria-controls="softwaredevelopment-tab-pane" aria-selected="true">
                                                    Software Development
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="websitedevelopment-tab" data-bs-toggle="tab" data-bs-target="#websitedevelopment-tab-pane" type="button"
                                                    role="tab" aria-controls="websitedevelopment-tab-pane" aria-selected="false">
                                                    Website Development
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="mobiledevelopment-tab" data-bs-toggle="tab" data-bs-target="#mobiledevelopment-tab-pane" type="button"
                                                    role="tab" aria-controls="mobiledevelopment-tab-pane" aria-selected="false">
                                                    Mobile Development
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="daml-tab" data-bs-toggle="tab" data-bs-target="#daml-tab-pane" type="button"
                                                    role="tab" aria-controls="daml-tab-pane" aria-selected="false">
                                                    Data Analysis & Machine Learning
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="cloud-tab" data-bs-toggle="tab" data-bs-target="#cloud-tab-pane" type="button"
                                                    role="tab" aria-controls="cloud-tab-pane" aria-selected="false">
                                                    Cloud
                                                </button>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="courseTabContent">
                            <div className="tab-pane fade show active" id="softwaredevelopment-tab-pane" role="tabpanel" aria-labelledby="softwaredevelopment-tab" tabindex="0">
                                <div className="courses__item shine__animate-item">
                                    <div className='courseDtls'>
                                        <Link to="/CertificateInDataAnalytics">
                                            <div className='coursedltsinn'>
                                                <div className='courseimg'>
                                                    <img src={img_django} alt='' />
                                                </div>
                                                <div className='crsName'>Certificate in Data Analytics</div>
                                                <div className='crsDetails'>
                                                    <span className='spnbrdr-rt'>3 Months</span>
                                                    <span>6 Modules</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/CertificateinAIML">
                                            <div className='coursedltsinn'>
                                                <div className='courseimg'>
                                                    <img src={img_php} alt='' />
                                                </div>
                                                <div className='crsName'>Certificate in AI/ML</div>
                                                <div className='crsDetails'>
                                                    <span className='spnbrdr-rt'>6 Months</span>
                                                    <span>12 Modules</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/CertificateinHealthcareInformatics">
                                            <div className='coursedltsinn'>
                                                <div className='courseimg'>
                                                    <img src={img_angular} alt='' />
                                                </div>
                                                <div className='crsName'>Certificate in Healthcare Informatics</div>
                                                <div className='crsDetails'>
                                                    <span className='spnbrdr-rt'>3 Months</span>
                                                    <span>12 Modules</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/FullStackDevelopment">
                                            <div className='coursedltsinn'>
                                                <div className='courseimg'>
                                                    <img src={img_dotnet} alt='' />
                                                </div>
                                                <div className='crsName'>Full Stack Development</div>
                                                <div className='crsDetails'>
                                                    <span className='spnbrdr-rt'>6 Months</span>
                                                    <span>12 Modules</span>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                                {/* <div className="courses__nav">
                                    <div className="courses-button-prev"><i className="flaticon-arrow-right"></i></div>
                                    <div className="courses-button-next"><i className="flaticon-arrow-right"></i></div>
                                </div> */}
                            </div>
                            {/* <div className="tab-pane fade" id="websitedevelopment-tab-pane" role="tabpanel" aria-labelledby="websitedevelopment-tab" tabindex="0">
                               
                            </div>
                            <div className="tab-pane fade" id="mobiledevelopment-tab-pane" role="tabpanel" aria-labelledby="mobiledevelopment-tab" tabindex="0">
                                
                            </div>
                            <div className="tab-pane fade" id="daml-tab-pane" role="tabpanel" aria-labelledby="daml-tab" tabindex="0">
                               
                            </div>
                            <div className="tab-pane fade" id="cloud-tab-pane" role="tabpanel" aria-labelledby="cloud-tab" tabindex="0">
                               
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* <!-- course-area-end --> */}
                {/* <!-- features-area --> */}
                <section class="features__area-two section-pt-120_ section-pb-90">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-8">
                                <div class="section__title text-center mb-40">
                                    <span class="titlegreen">Our Top Features</span>
                                    <h2 class="title">Achieve Your Goal With Us</h2>
                                    <p>Discover Our Premier Selection of Top Courses</p>
                                </div>
                            </div>
                        </div>
                        <div class="features__item-wrap">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="features__item-two">
                                        <div class="features__content-two">
                                            <div class="content-top">
                                                <div class="features__icon-two">
                                                    <img src={ExpertTutors} alt="img" class="injectable_" />
                                                </div>
                                                <h2 class="title">Expert Tutors</h2>
                                            </div>
                                            <p>When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.</p>
                                        </div>
                                        <div class="features__item-shape">
                                            <img src={star} alt="img" class="injectable_" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="features__item-two">
                                        <div class="features__content-two">
                                            <div class="content-top">
                                                <div class="features__icon-two">
                                                    <img src={EffectiveCourses} alt="img" class="injectable_" />
                                                </div>
                                                <h2 class="title">Effective Courses</h2>
                                            </div>
                                            <p>when an unknown printer took a galley offe type and scrambled makes.</p>
                                        </div>
                                        <div class="features__item-shape">
                                            <img src={star} alt="img" class="injectable_" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="features__item-two">
                                        <div class="features__content-two">
                                            <div class="content-top">
                                                <div class="features__icon-two">
                                                    <img src={EarnCertificate} alt="img" class="injectable_" />
                                                </div>
                                                <h2 class="title">Earn Certificate</h2>
                                            </div>
                                            <p>when an unknown printer took a galley offe type and scrambled makes.</p>
                                        </div>
                                        <div class="features__item-shape">
                                            <img src={star} alt="img" class="injectable_" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- features-area-end --> */}


                {/* <!-- features-area --> */}
                <section className="features__area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section__title white-title text-center mb-50">
                                    {/* <span className="sub-title">How We Start Journey</span> */}
                                    <h2 className="title">Start your Learning Journey Today!</h2>
                                    <p>Groove’s intuitive shared inbox makesteam members together <br /> organize, prioritize and.In this episode.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <img src={HomeJourney1} alt="img" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Learn with Experts</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <img src={HomeJourney2} alt="img" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Learn Anything</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <img src={HomeJourney3} alt="img" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Get Online Certificate</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <img src={HomeJourney4} alt="img" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">E-mail Marketing</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- features-area-end --> */}


            </main>
        </>
    )
}
