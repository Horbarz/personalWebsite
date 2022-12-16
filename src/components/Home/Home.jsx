import React from 'react'


function Home() {

    const downloadCV = () => {

    }

    return (
        <div>
            <section id="home" className="ms-home ms-home-water home-section ms-section bg-shape-hero">
                <div className="water-bg" id="water-js">
                    <div className="container p-0">
                        <div className="ms-row">
                            <div className="profile-img" data-aos="fade-up" data-aos-duration="4000">
                                <div className="profile-detail">
                                    <img src="assets/img/image_001.jpeg" className="profile" alt="profile" />
                                </div>
                            </div>
                            <div className="ms-detail" data-aos="fade-up" data-aos-duration="2000">
                                <div className="info">
                                    <h1>ABIOYE OBALOLUWA</h1>
                                    <h2><span>-</span>QA Engineer | Software Engineer</h2>
                                    <p>Experienced QA Engineer with over 3 years of experience and practical history working in Banking, Educational, and FinTech industries as an Automation and Manual QA engineer.</p>
                                    <a className="custom-btn ms-btn m-r-5px" download="AbioyeObaloluwaCV.pdf" href="assets/cv/AbioyeObaloluwaCV.pdf">Download CV</a>
                                    <a className="custom-btn ms-btn-1 nav-about" href="#about">More Info</a>
                                </div>
                            </div>
                            <div className="scroll-down"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home