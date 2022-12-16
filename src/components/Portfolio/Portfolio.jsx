import React from 'react'
import ReactPlayer from 'react-player'

function Portfolio() {
    return (
        <div>
            <section id="portfolio" class="ms-portfolio-section ms-section portfolio padding-tb-80 bg-shape">
                <div class="container">
                    <div class="section-title p-b-15" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                        <h2>My <span>Portfolio</span></h2>
                        <span class="ligh-title">Portfolio</span>
                    </div>
                    <div class="row m-b-minus-24px">
                        <div class="portfolio-content">
                            <div>
                                <div class="row">
                                    <div class="col-sm-12" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                        {/* <div class="portfolio-tabs">
                                            <ul>
                                                <li class="filter" data-filter="all">ALL</li>
                                                <li class="filter" data-filter=".design">DESIGN</li>
                                                <li class="filter" data-filter=".development">DEVELOPMENT</li>
                                                <li class="filter" data-filter=".graphics">GRAPHICS</li>
                                                <li class="filter" data-filter=".templates">Templates</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div class="col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                                        <div class="portfolio-content-items">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-xs-12 mix graphics templates">
                                                    <ReactPlayer url="https://youtu.be/MFWteItp2kc" />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-xs-12 mix design">
                                                    <ReactPlayer url="https://youtu.be/YK0uM0nxqhI" />
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-xs-12 mix design">

                                                </div>
                                                {/* <div class="col-lg-4 col-md-6 col-xs-12 mix development">
                                                    <div class="hovereffect">
                                                        <div class="portfolio-img">
                                                            <img src="assets/img/portfolio/44.jpg" alt="development" />
                                                            <h3><span>Cypress</span></h3>
                                                        </div>
                                                        <div class="overlay">
                                                            <div class="overlay-info">
                                                                <a class="info" href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                <a class="info" data-fancybox="gallery" href="assets/img/portfolio/4.jpg"><i class="fa fa-search" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-xs-12 mix templates design">
                                                    <div class="hovereffect">
                                                        <div class="portfolio-img">
                                                            <img src="assets/img/portfolio/55.jpg" alt="templates" />
                                                            <h3><span>Templates</span><span>Web Design</span></h3>
                                                        </div>
                                                        <div class="overlay">
                                                            <div class="overlay-info">
                                                                <a class="info" href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                <a class="info" data-fancybox="gallery" href="assets/img/portfolio/5.jpg"><i class="fa fa-search" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-xs-12 mix development graphics">
                                                    <div class="hovereffect">
                                                        <div class="portfolio-img">
                                                            <img src="assets/img/portfolio/66.jpg" alt="development" />
                                                            <h3><span>Development</span><span>3D Graphics</span></h3>
                                                        </div>
                                                        <div class="overlay">
                                                            <div class="overlay-info">
                                                                <a class="info" href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                                                                <a class="info" data-fancybox="gallery" href="assets/img/portfolio/6.jpg"><i class="fa fa-search" aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
