import React from 'react'

function Contact() {
    return (
        <div>

            <section id="contact" class="ms-contact-section ms-section padding-tb-80 body-bg">
                <div class="container">
                    <div class="section-title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                        <h2>Get in <span>Touch</span></h2>
                        <span class="ligh-title">Contact</span>
                    </div>
                    <div class="row">
                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">

                            <iframe src="//maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"
                                allowfullscreen=""></iframe>
                        </div>
                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                            <form>
                                <div class="form-group" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                                    <input type="text" class="form-control" id="fname" placeholder="Full Name" />
                                </div>
                                <div class="form-group" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                    <input type="email" class="form-control" id="umail" placeholder="Email" />
                                </div>
                                <div class="form-group" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <input type="text" class="form-control" id="phone" placeholder="Phone" />
                                </div>
                                <div class="form-group" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="custom-btn ms-btn-1" data-aos="fade-up" data-aos-duration="2000"
                                    data-aos-delay="700">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact