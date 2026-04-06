import React from 'react'
import { Link } from 'react-router-dom'
import banner_shape01 from '../assets/img/banner/banner_shape01.png'
import ImageAboutUs from '../assets/img/Images/ImageAboutUs.jpg'
import { SlideshowLightbox } from 'lightbox.js-react'
import fest1 from '../assets/img/FestUpload/fest1.JPG'
import fest2 from '../assets/img/FestUpload/fest2.JPG'
import fest3 from '../assets/img/FestUpload/fest3.JPG'
import fest4 from '../assets/img/FestUpload/fest4.JPG'
import fest5 from '../assets/img/FestUpload/fest5.JPG'
import fest6 from '../assets/img/FestUpload/fest6.JPG'
import fest7 from '../assets/img/FestUpload/fest7.JPG'
import fest8 from '../assets/img/FestUpload/fest8.JPG'
import fest9 from '../assets/img/FestUpload/fest9.JPG'
import fest10 from '../assets/img/FestUpload/fest10.JPG'
import fest11 from '../assets/img/FestUpload/fest11.JPG'
import fest12 from '../assets/img/FestUpload/fest12.JPG'
import fest13 from '../assets/img/FestUpload/fest13.JPG'
import fest14 from '../assets/img/FestUpload/fest14.JPG'
import fest15 from '../assets/img/FestUpload/fest15.JPG'
import fest16 from '../assets/img/FestUpload/fest16.JPG'
import fest17 from '../assets/img/FestUpload/fest17.JPG'
import fest18 from '../assets/img/FestUpload/fest18.JPG'
import fest19 from '../assets/img/FestUpload/fest19.JPG'
import fest20 from '../assets/img/FestUpload/fest20.JPG'
import fest21 from '../assets/img/FestUpload/fest21.JPG'
import fest22 from '../assets/img/FestUpload/fest22.JPG'
import fest23 from '../assets/img/FestUpload/fest23.JPG'
import fest24 from '../assets/img/FestUpload/fest24.JPG'
import fest25 from '../assets/img/FestUpload/fest25.JPG'
import fest26 from '../assets/img/FestUpload/fest26.JPG'
import fest27 from '../assets/img/FestUpload/fest27.JPG'
import fest28 from '../assets/img/FestUpload/fest28.JPG'
import fest29 from '../assets/img/FestUpload/fest29.JPG'
import fest30 from '../assets/img/FestUpload/fest30.JPG'
import fest31 from '../assets/img/FestUpload/fest31.JPG'
import fest32 from '../assets/img/FestUpload/fest32.JPG'
import fest33 from '../assets/img/FestUpload/fest33.JPG'
import fest34 from '../assets/img/FestUpload/fest34.JPG'
import fest35 from '../assets/img/FestUpload/fest35.JPG'
import { Grid } from 'swiper/modules'

export default function PhotoGallery() {
    return (
        <>
            {/* <!-- breadcrumb-area --> */}
            <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb__content">
                                <h4>Gallery</h4>
                                <nav class="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to='/'>Home</Link>
                                    </span>
                                    <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/photogallery">Photo Galley</Link>
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
                                <div className='picGallery'>
                                    <h3 className="title">Tech Fest Memories – 7th December 2024</h3>
                                </div>
                                <SlideshowLightbox className="container grid grid-cols-4 gap-10 mx-auto custome-gl">

                                    <img className="w-full rounded" src={fest35} />
                                    <img className="w-full rounded" src={fest34} />
                                    <img className="w-full rounded" src={fest33} />
                                    <img className="w-full rounded" src={fest32} />
                                    <img className="w-full rounded" src={fest31} />
                                    <img className="w-full rounded" src={fest30} />
                                    <img className="w-full rounded" src={fest29} />
                                    <img className="w-full rounded" src={fest28} />
                                    <img className="w-full rounded" src={fest27} />
                                    <img className="w-full rounded" src={fest26} />
                                    <img className="w-full rounded" src={fest25} />
                                    <img className="w-full rounded" src={fest24} />
                                    <img className="w-full rounded" src={fest23} />
                                    <img className="w-full rounded" src={fest22} />
                                    <img className="w-full rounded" src={fest21} />
                                    <img className="w-full rounded" src={fest20} />
                                    <img className="w-full rounded" src={fest19} />
                                    <img className="w-full rounded" src={fest18} />
                                    <img className="w-full rounded" src={fest17} />
                                    <img className="w-full rounded" src={fest16} />
                                    <img className="w-full rounded" src={fest15} />
                                    <img className="w-full rounded" src={fest14} />
                                    <img className="w-full rounded" src={fest13} />
                                    <img className="w-full rounded" src={fest12} />
                                    <img className="w-full rounded" src={fest11} />
                                    <img className="w-full rounded" src={fest10} />
                                    <img className="w-full rounded" src={fest9} />
                                    <img className="w-full rounded" src={fest8} />
                                    <img className="w-full rounded" src={fest7} />
                                    <img className="w-full rounded" src={fest6} />
                                    <img className="w-full rounded" src={fest5} />
                                    <img className="w-full rounded" src={fest4} />
                                    <img className="w-full rounded" src={fest3} />
                                    <img className="w-full rounded" src={fest2} />
                                    <img className="w-full rounded" src={fest1} />

                                </SlideshowLightbox>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- about-us-area-end --> */}
        </>
    )
}
