import { FaGlobe } from "react-icons/fa";

function Leadership() {

    return(
        <div id="leadership">
            <h2>Leadership</h2>

            <br/>

            <div className="entries">
                <div className="card">
                    <h3>Food Bank Fundraiser</h3>
                    <h4 className="cardCompany">RAMADA BY WYNDHAM <span><a href="https://www.ramadaottawa.com/" target="_blank" rel="noreferrer"><FaGlobe/></a></span></h4>
                    <p className="timeTag">November 2023</p>
                    <br/>
                    <ul>
                        <li>Organized a Food Bank Fundraiser event by providing food, facilitating the sale of raffle tickets, preparing and dismantling the event</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Math Tutor</h3>
                    <h4 className="cardCompany">HOLY TRINITY CATHOLIC HIGH SCHOOL <span><a href="https://trh.ocsb.ca/" target="_blank" rel="noreferrer"><FaGlobe/></a></span></h4>
                    <p className="timeTag">October 2023</p>
                    <br/>
                    <ul>
                        <li>Explained complex concepts in simple terms through breaking down math problems step by step</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Leadership