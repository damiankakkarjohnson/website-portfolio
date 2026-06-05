import { FaGlobe } from "react-icons/fa";

function Experience() {
    
    return(
        <div id="experience">
            <h2>Experience</h2>

            <br/>
            <div id="experienceEntries">
                <div className="experienceEntry">
                    <h3>Co-Founder</h3>
                    <h4 className="experienceCompany">AISSLO LLC <span><a href="https://www.aisslo.com/" target="_blank" rel="noreferrer"><FaGlobe/></a></span></h4>
                    <p className="experienceTime">October 2025 - Present</p>
                    <br/>
                    <ul>
                        <li>Shape core features for an SSL certificate management dashboard</li>
                        <li>Collaborate with SaaS developers on feature requirements and system design</li>
                        <li>Work across product strategy, SaaS development, and cybersecurity</li>
                    </ul>
                </div>

                <div className="experienceEntry">
                    <h3>Crew Member</h3>
                    <h4 className="experienceCompany">CHIPOTLE MEXICAN GRILL <span><a href="https://www.chipotle.ca/" target="_blank" rel="noreferrer"><FaGlobe/></a></span></h4>
                    <p className="experienceTime">June 2025 - December 2025</p>
                    <br/>
                    <ul>
                        <li>Delivered efficient customer service in a fast-paced environment while maintaining accuracy under pressure</li>
                        <li>Trained new employees and collaborated with team members to ensure smooth daily operations</li>
                    </ul>
                </div>

                <div className="experienceEntry">
                    <h3>Meeting Room Assistant</h3>
                    <h4 className="experienceCompany">RAMADA BY WYNDHAM <span><a href="https://www.ramadaottawa.com/" target="_blank" rel="noreferrer"><FaGlobe/></a></span></h4>
                    <p className="experienceTime">April 2023 - January 2024</p>
                    <br/>
                    <ul>
                        <li>Set up meeting rooms accurately and on schedule for a variety of bookings</li>
                        <li>Assisted with catering delivery and setup, contributing to smooth event service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience