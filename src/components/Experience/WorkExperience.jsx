import React from 'react'

function WorkExperience() {
    return (

        <section id="experience" className="ms-experience-section ms-section padding-tb-80 body-bg">
            <div className="container">
                <div className="row">
                    <div className="section-title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                        <h2>Work <span>Experience</span></h2>
                        <span className="ligh-title">Achievements</span>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="education ms-box" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                            {/* <h4>Education</h4> */}
                            <ul className="timeline">
                                <li className="timeline-item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                    <div className="timeline-info">
                                        <span>May 2020 - Present</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5 className="timeline-title">APPZONE CARDS<span className="sub">- QA Engineer</span></h5>
                                        <li>• Analysis of functional and technical requirements, design specifications, and architecture to identify
                                            relevant testing methodologies for debit card processing and management software.</li>
                                        <li>• Test plan development that contains projected timelines for test completion while
                                            addressing all considerations raised during the analysis phase.</li>
                                        <li>• Documentation of test cases.</li>
                                        <li>• Manual execution of test cases based on the software requirement document.</li>
                                        <li>• Extensively performed Regression, Exploratory, Load, Performance, Sanity, and Smoke testing</li>
                                        <li>• Development of traceability matrix to ensure all requirements are fulfilled.</li>
                                        <li>• Defect tracking using Jira; Creating, prioritizing, and assigning issues.</li>
                                        <li>• Responsible for E2E test automation framework with 100+ Test cases for 10 commercial banks.</li>
                                        <li>• 50+ Test Cases running daily in CI/CD (Groovy, Selenium, Team city, and Git).</li>
                                        <li>• Hands-on experience with various frameworks such as Data driven, Keyword Driven, Hybrid Approach, and Behavioral
                                            Driven Development (BDD).</li>
                                        <li>• Creating reusable and generic methods that can be used across the automation framework.</li>
                                        <li>• Identified inefficiencies with the manual testing process and improved them with automation.</li>
                                        <li>&nbsp</li>
                                        <li>&nbsp</li>
                                        <li>&nbsp</li>
                                        <li>&nbsp</li>
                                    </div>

                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="experiense ms-box" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                            {/* <h4>Experiense</h4> */}
                            <ul className="timeline">
                                <li className="timeline-item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                    <div className="timeline-info">
                                        <span>April 2019 - December 2019</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5 className="timeline-title">SPRINBLE<span className="sub">- Software Engineer</span></h5>
                                        <li>• Developed a teacher management web app using ASP.Net Core for the backend, AWS Services for
                                            media management, and React for the front end.</li>
                                        <li>• Designed a simple domain-specific language to manage lesson contents for teachers.</li>
                                        <li>• Created a containerized Docker image for deployment to Heroku</li>
                                        <li>• Design and implementation of UI test automation framework using selenium web driver, Cypress,
                                            and Jenkins.</li>
                                        <li>• Regular interaction with the client to discuss functionality improvement.</li>
                                    </div>
                                </li>
                                <li className="timeline-item" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                                    <div className="timeline-info">
                                        <span>October 2018 - April 2019</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5 className="timeline-title">RFM Network<span className="sub">- Jnr. Network Engineer</span></h5>
                                        <li>• Installed Point to Point Microwave radios for Diamond Bank, First Bank and Forte Oil.</li>
                                        <li>• Installation of Point to Multipoint Ethernet microwave radio links.</li>
                                        <li>• Installation of Structural Office Cabling.</li>
                                        <li>• RF/BTS/Microwave and rectifier installations.</li>
                                        <li>• Maintenance of point to multipoint radios.</li>
                                        <li>• Developed an app that automated the process of extracting Data from company mails and
                                            conversion to pdf files for record purpose and keeping up with company's SLA.</li>

                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    )
}

export default WorkExperience