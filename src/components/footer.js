import React from "react";
import uon_logo from '../assets/images/uon-logo.jpg'
import usaid_log from '../assets/images/USAID-Kenya.png'
import health_log from '../assets/images/healthit.png'

const Footer = () => (
  <div className="footer">
        <div className="row flex-container">
            <div className="col-md-4 photos">
            <   img src={usaid_log} alt="University of Nairobi" />
            </div>
            <div className="col-md-4 photos center">
                <img src={uon_logo} alt="University of Nairobi" />
            </div>
            <div className="col-md-4 photos right-align">
                <img src={health_log} alt="University of Nairobi" />
            </div>

        </div>
  </div>
);

export default Footer;