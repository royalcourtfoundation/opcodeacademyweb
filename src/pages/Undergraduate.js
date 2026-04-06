import React from 'react'
import { Link } from 'react-router-dom'
// import brdcrumimage from '../assets/img/bg/breadcrumb_bg.jpg'
import brdcrumimage from '../assets/img/bg/breadcrumb_bg.jpg'
import img_django from '../assets/img/others/img_django.svg'
import img_angular from '../assets/img/others/img_angular.svg'
import img_dotnet from '../assets/img/others/img_dotnet.svg'
import img_php from '../assets/img/others/img_php.svg'
import courses_bg from '../assets/img/bg/courses_bg.jpg'
import EarnCertificate from '../assets/img/icons/EarnCertificate.svg'
import ExpertTutors from '../assets/img/icons/ExpertTutors.svg'
import EffectiveCourses from '../assets/img/icons/EffectiveCourses.svg'
import star from '../assets/img/icons/star.png'
import IMG_Course5 from '../assets/img/CourseImages/IMG_Course5.svg'
import IMG_Course6 from '../assets/img/CourseImages/IMG_Course6.svg'
import IMG_Course7 from '../assets/img/CourseImages/IMG_Course7.svg'
import IMG_Course8 from '../assets/img/CourseImages/IMG_Course8.svg'
import IMG_Course9 from '../assets/img/CourseImages/IMG_Course9.svg'
import IMG_Course10 from '../assets/img/CourseImages/IMG_Course10.svg'
import IMG_Course11 from '../assets/img/CourseImages/IMG_Course11.svg'
import IMG_Course12 from '../assets/img/CourseImages/IMG_Course12.svg'
import IMG_Course13 from '../assets/img/CourseImages/IMG_Course13.svg'
import IMG_Course14 from '../assets/img/CourseImages/IMG_Course14.svg'
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
import newsletter_img from '../assets/img/others/newsletter_img.png'
import newsletter_shape01 from '../assets/img/others/newsletter_shape01.png'
import newsletter_shape02 from '../assets/img/others/newsletter_shape02.png'
import newsletter_shape03 from '../assets/img/others/newsletter_shape03.png'
import breadcrumb_shape01 from '../assets/img/others/breadcrumb_shape01.svg'
import breadcrumb_shape02 from '../assets/img/others/breadcrumb_shape02.svg'
import breadcrumb_shape03 from '../assets/img/others/breadcrumb_shape03.svg'
import breadcrumb_shape04 from '../assets/img/others/breadcrumb_shape04.svg'
import breadcrumb_shape05 from '../assets/img/others/breadcrumb_shape05.svg'

export default function Undergraduate() {
    return (
        <>
            <main class="main-area fix">

                {/* <!-- breadcrumb-area --> */}
                <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb__content">
                                    <h4>Undergraduate Courses</h4>
                                    <nav class="breadcrumb">
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to='/'>Home</Link>
                                        </span>
                                        <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                        <span property="itemListElement" typeof="ListItem">
                                            <Link to="/undergraduate">Undergraduate Courses</Link>
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="breadcrumb__shape-wrap">
                        <img src={breadcrumb_shape01} alt="img" class="alltuchtopdown" />
                        <img src={breadcrumb_shape02} alt="img" data-aos="fade-right" data-aos-delay="300" />
                        <img src={breadcrumb_shape03} alt="img" data-aos="fade-up" data-aos-delay="400" />
                        <img src={breadcrumb_shape04} alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                        <img src={breadcrumb_shape05} alt="img" data-aos="fade-left" data-aos-delay="400" />
                    </div>
                </div>
                {/* <!-- breadcrumb-area-end --> */}
                <div className='container'>
                   

                    {/* <!-- language course-area --> */}
                    <section className="courses-area mb-5" data-background={courses_bg}>
                        <div className="container">
                            <div className="section__title-wrap">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="section__title text-center mt-5">
                                            <h2 className="title">All Undergraduate Courses</h2>
                                            <p className="desc">Discover Our Premier Selection of Top Courses</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='courseDtls'>
                                <Link to="/CourseBCA">
                                    <div className='coursedltsinn'>
                                        <div className='courseimg'>
                                            <img src={img_django} alt='' />
                                        </div>
                                        <div className='crsName'>BCA</div>
                                        <div className='crsDetails'>
                                            <span className='spnbrdr-rt'>3 Years</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/CourseBBA">
                                    <div className='coursedltsinn'>
                                        <div className='courseimg'>
                                            <img src={img_django} alt='' />
                                        </div>
                                        <div className='crsName'>BBA</div>
                                        <div className='crsDetails'>
                                            <span className='spnbrdr-rt'>3 Years</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/CourseBSC">
                                    <div className='coursedltsinn'>
                                        <div className='courseimg'>
                                            <img src={img_django} alt='' />
                                        </div>
                                        <div className='crsName'>B Sc</div>
                                        <div className='crsDetails'>
                                            <span className='spnbrdr-rt'>3 Years</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/CourseBCOM">
                                    <div className='coursedltsinn'>
                                        <div className='courseimg'>
                                            <img src={img_django} alt='' />
                                        </div>
                                        <div className='crsName'>B Com</div>
                                        <div className='crsDetails'>
                                            <span className='spnbrdr-rt'>3 Years</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/CourseBA">
                                    <div className='coursedltsinn'>
                                        <div className='courseimg'>
                                            <img src={img_django} alt='' />
                                        </div>
                                        <div className='crsName'>BA</div>
                                        <div className='crsDetails'>
                                            <span className='spnbrdr-rt'>3 Years</span>
                                            <span></span>
                                        </div>
                                    </div>
                                </Link>
                              

                               

                            </div>
                        </div>
                    </section>
                    {/* <!-- course-area-end --> */}

                     {/* <!-- language language-area --> */}
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
                    {/* <!-- language-area-end --> */}

                    {/* <!-- features-area --> */}
                    <section class="features__area-two section-pt-120_ section-pb-90_">
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
