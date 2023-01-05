import React from 'react'


function Home() {


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
                                    <h2><span>-</span>QA Engineer | Software Automation Test Engineer</h2>
                                    <p>Professional QA engineer with over 3 years of experience performing detailed agile testing of fintech, educational,
                                        ecommerce, and CRM-based software applications. Prodigious work experience in identifying, analyzing, and
                                        documenting software defects with extensive analytical skills, great manual and automation testing expertise, effective
                                        communication skills, solid attention to detail, and excellent ability to work in a team.</p>
                                    <a className="custom-btn ms-btn m-r-5px" download="AbioyeObaloluwaCV.pdf" href="assets/cv/AbioyeObaloluwaCV.pdf">Download CV</a>
                                    <a className="custom-btn ms-btn-1 nav-about" href="#about">About Me</a>
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