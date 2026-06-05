
function Projects() {

    return (
        <div id="projects">
            <h2>Projects</h2>

            <br/>

            <div className="entries">
                <div className="card">
                    <h3>Spreadsheet Analyzer Chrome Extension</h3>
                    <p className="timeTag">May 2026 - Present</p>
                    <br/>
                    <ul>
                        <li>Building a Chrome extension that connects with Google Sheets to help users analyze data and uncover meaningful insights</li>
                        <li>Creating responsive React.js interfaces and integrating APIs to generate reports and highlight important trends</li>
                    </ul>
                    <ul className="projectTechStack">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>HTML/CSS</li>
                        <li>Google Sheets API</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Restaurant Web Application</h3>
                    <p className="timeTag">December 2025</p>
                    <br/>
                    <ul>
                        <li>Created a full-stack restaurant platform that allows users to create accounts, manage profiles, and securely access personalized information</li>
                        <li>Designed backend APIs and database functionality to support user discovery, order submission, and order history management</li>
                    </ul>
                    <ul className="projectTechStack">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>HTML/CSS</li>
                        <li>MongoDB</li>
                        <li>REST APIs</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Cellular Network Simulator</h3>
                    <p className="timeTag">March 2025</p>
                    <br/>
                    <ul>
                        <li>Built a multithreaded cellular network simulator with UDP-based communication between 100+ vehicles and 7 concurrent cell towers</li>
                        <li>Designed coverage-based connection management using geometric distance and tower capacity constraints with real-time X11 visualization</li>
                    </ul>
                    <ul className="projectTechStack">
                        <li>C</li>
                        <li>Pthreads</li>
                        <li>UDP Sockets</li>
                        <li>X11 / Xlib</li>
                        <li>Linux</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Auto Park Inventory and Sales App</h3>
                    <p className="timeTag">December 2024</p>
                    <br/>
                    <ul>
                        <li>Built a Java desktop app with a cart-based purchasing system and automated sales/popularity report generation using MVC architecture</li>
                        <li>Organized and structured program features via OOP principles across a modular class hierarchy to ensure code reusability and data integrity</li>
                    </ul>
                    <ul className="projectTechStack">
                        <li>Java</li>
                        <li>JavaFX</li>
                        <li>Object Oriented Programming</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects