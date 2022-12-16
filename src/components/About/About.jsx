import React from 'react'

function About() {
    return (
        <div>
            <section id="about" className="ms-about-section ms-section padding-tb-80 body-bg">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>About<span> Me</span></h2>
                            <span className="ligh-title">About</span>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-about-detail">
                                <h4>Quality can never be overemphasized.</h4>
                                <p className="ms-text">Experienced QA Engineer having <b>3+ years</b> of solid experience in the field and practical history working in Banking, Educational, Ecommerce, and FinTech industries as an Automation and Manual QA engineer</p>
                                <div className="ms-about-info">
                                    <ul className="m-r-30">
                                        <li><span className="title">Full Name<b>:</b></span>Abioye Obaloluwa Peter</li>
                                        <li><span className="title">Age<b>:</b></span>24 Years</li>
                                        <li><span className="title">Language<b>:</b></span>English</li>
                                        <li><span className="title">Phone No<b>:</b></span>+2348175885645</li>
                                        <li><span className="title">Email<b>:</b></span><a href='mailto:abioyeobaloluwapeter@gmail.com'>abioyeobaloluwapeter@gmail.com</a></li>
                                        <li><span className='title'>Linkedln<b>:</b></span><a href='https://www.linkedin.com/in/abioye-obaloluwa'>Abioye_Obaloluwa</a></li>
                                        <li><span className='title'>Github<b>:</b></span><a href='https://github.com/horbarz'>horbarz_github</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-skill-progress">
                                <h5>Java</h5>
                                <div className="progress" data-percent="90%">
                                    <div className="progress-done progress-done-php" role="progressbar">

                                    </div>
                                </div>
                                <h5>C#</h5>
                                <div className="progress" data-percent="50%">
                                    <div className="progress-done progress-done-js" role="progressbar">

                                    </div>
                                </div>
                                <h5>Javascript</h5>
                                <div className="progress" data-percent="98%">
                                    <div className="progress-done progress-done-html" role="progressbar">

                                    </div>
                                </div>
                                <h5>Python</h5>
                                <div className="progress" data-percent="92%">
                                    <div className="progress-done progress-done-css" role="progressbar">

                                    </div>
                                </div>
                                <h5>Selenium</h5>
                                <div className="progress" data-percent="70%">
                                    <div className="progress-done progress-done-scss" role="progressbar">

                                    </div>
                                </div>
                                <h5>Groovy</h5>
                                <div className="progress" data-percent="65%">
                                    <div className="progress-done progress-done-ps" role="progressbar">

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

export default About