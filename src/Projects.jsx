
function Projects() {

    return (
        <div id="projects">
            <h2>Projects</h2>

            <br/>

            <div id="projectEntries">
                <div className="projectEntry">
                    <h3>Spreadsheet Analyzer Chrome Extension</h3>
                    <p className="projectTime">May 2026 - Present</p>
                    <br/>
                    <ul>
                        <li>Building a Chrome extension that connects with Google Sheets to help users analyze data and uncover meaningful insights</li>
                        <li>Creating responsive React.js interfaces and integrating APIs to generate reports and highlight important trends</li>
                    </ul>
                    <ul className="projectTechStack">
                        <li>React.js</li>
                        <li>HTML/CSS</li>
                        <li>Google Sheets API</li>
                    </ul>
                </div>

                <div className="projectEntry">
                    <h3>Restaurant Web Application</h3>
                    <p className="projectTime">December 2025</p>
                    <br/>
                    <ul>
                        <li>Created a full-stack restaurant platform that allows users to create accounts, manage profiles, and securely access personalized information</li>
                        <li>Designed backend APIs and database functionality to support user discovery, order submission, and order history management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects