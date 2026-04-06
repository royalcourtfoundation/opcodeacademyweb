import React from 'react'
import breadcrumb_shape01 from '../assets/img/others/breadcrumb_shape01.svg';
import breadcrumb_shape02 from '../assets/img/others/breadcrumb_shape02.svg';
import breadcrumb_shape03 from '../assets/img/others/breadcrumb_shape03.svg';
import breadcrumb_shape04 from '../assets/img/others/breadcrumb_shape04.svg';
import breadcrumb_shape05 from '../assets/img/others/breadcrumb_shape05.svg';
import error_img from '../assets/img/others/error_img.svg';
import breadcrumb_bg from '../assets/img/bg/breadcrumb_bg.jpg';
import right_arrow from '../assets/img/icons/right_arrow.svg';

export default function NotFound() {
    return (
        <div>
            <main className="main-area fix">
            

                <section className="breadcrumb__area breadcrumb__bg" data-background={breadcrumb_bg} />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h3 className="title">Error Page</h3>
                                <nav className="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <a href="index.html">Home</a>
                                    </span>
                                    <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">Error Page</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb__shape-wrap">
                    <img src={breadcrumb_shape01} alt="img" className="alltuchtopdown" />
                    <img src={breadcrumb_shape02} alt="img" data-aos="fade-right" data-aos-delay="300" />
                    <img src={breadcrumb_shape03} alt="img" data-aos="fade-up" data-aos-delay="400" />
                    <img src={breadcrumb_shape04} alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                    <img src={breadcrumb_shape05} alt="img" data-aos="fade-left" data-aos-delay="400" />
                </div>

                <section className="error-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="error-wrap text-center">
                                    <div className="error-img">
                                        <img src={error_img} alt="img" className="injectable" />
                                    </div>
                                    <div className="error-content">
                                        <h2 className="title">ERROR PAGE! <span>Sorry! This Page is Not Available!</span></h2>
                                        <div className="tg-button-wrap">
                                            <a href="index.html" className="btn arrow-btn">Go To Home Page <img src={right_arrow} alt="img" className="injectable" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
