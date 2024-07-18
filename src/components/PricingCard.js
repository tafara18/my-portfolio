import { Link } from "react-router-dom";
import "./PricingCard.css";

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card ">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p>- 3 days -</p>
                <p>- 3 pages -</p>
                <p>- featuered -</p>
                <p>- Responsive Design -</p>
                <Link to="/CONTACT" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
            <div className="card ">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$200</p>
                <p>- 4 days -</p>
                <p>- 5 pages -</p>
                <p>- featuered -</p>
                <p>- Responsive Design -</p>
                <Link to="/CONTACT" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
            <div className="card ">
                <h3>- business -</h3>
                <span className="bar"></span>
                <p className="btc">$300</p>
                <p>- 5 days -</p>
                <p>- 8 pages -</p>
                <p>- featuered -</p>
                <p>- Responsive Design -</p>
                <Link to="/CONTACT" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
    </div>
  );
}

export default PricingCard;