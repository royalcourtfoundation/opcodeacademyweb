import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function ContactUs() {


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setIsSubmitted(false)
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    //  clear data 
    let handleClear = () => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Messsage").value = "";
    }
    return (

        <>
            {/* <!-- breadcrumb-area --> */}
            <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two breadcrumbcustom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb__content">
                                <h4>Contact Us</h4>
                                <nav class="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to='/'>Home</Link>
                                    </span>
                                    <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link to="/contactus">Contact Us</Link>
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
                <section className="contact__details-area section-py-120">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact__form">
                                <h2 className="title" style={{ color: '#3783F3' }}>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                                {isSubmitted && (
                                    <div className="form-feedback">
                                        <p style={{ color: 'green' }}>
                                            Your enquiry has been sent successfully! If you have any further queries, please contact us at +91 9696668952.
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact__map">
                                <h2 className="title" style={{ color: '#3783F3' }}>Our Location</h2>
                                <div className="map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9977787528574!2d80.85151997450342!3d26.871811661848795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff4248b29629%3A0xedc3b1f8295a712e!2sOPCODE%20Academy!5e0!3m2!1sen!2sin!4v1722727610235!5m2!1sen!2sin"
                                        width="100%" height="100%" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
