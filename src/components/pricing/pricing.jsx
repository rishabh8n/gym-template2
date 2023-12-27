import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="container pricing_container">
        <p className="fs-600 text-accent-400">OUR PLAN</p>
        <h2 className="fs-850 fw-bold text-neutral-100">
          CHOOSE YOUR PRICING PLAN
        </h2>
        <div className="pricing_list">
          <div className="list-item">
            {/* <div> */}
            <h3 className="fs-750 fw-semi-bold text-neutral-100">FREE TRIAL</h3>
            <h4 className="text-accent-400 fs-banner fw-bold">$ 0.0</h4>
            <p className="fw-semi-bold fs-600 text-neutral-100">SINGLE CLASS</p>
            <ul role="list">
              <li className="text-neutral-200">Unlimited equipments</li>
              <li className="text-neutral-200">No time restriction</li>
              <li className="text-neutral-200">Personalized Diet Plan</li>
              <li className="text-neutral-200">Weight losing classes</li>
            </ul>
            <button className="button list-btn | text-neutral-100 fs-750 bg-neutral-700">
              Join Now
            </button>
            {/* </div> */}
          </div>
          <div className="list-item">
            {/* <div> */}
            <h3 className="fs-750 fw-semi-bold text-neutral-100">1 MONTH</h3>
            <h4 className="text-accent-400 fs-banner fw-bold">$ 59.0</h4>
            <p className="fw-semi-bold fs-600 text-neutral-100">SINGLE CLASS</p>
            <ul role="list">
              <li className="text-neutral-200">Unlimited equipments</li>
              <li className="text-neutral-200">No time restriction</li>
              <li className="text-neutral-200">Personalized Diet Plan</li>
              <li className="text-neutral-200">Weight losing classes</li>
            </ul>
            <button className="button list-btn | text-neutral-100 fs-750 bg-neutral-700">
              Join Now
            </button>
            {/* </div> */}
          </div>
          <div className="list-item">
            {/* <div> */}
            <h3 className="fs-750 fw-semi-bold text-neutral-100">3 MONTH</h3>
            <h4 className="text-accent-400 fs-banner fw-bold">$ 99.0</h4>
            <p className="fw-semi-bold fs-600 text-neutral-100">SINGLE CLASS</p>
            <ul role="list">
              <li className="text-neutral-200">Unlimited equipments</li>
              <li className="text-neutral-200">No time restriction</li>
              <li className="text-neutral-200">Personalized Diet Plan</li>
              <li className="text-neutral-200">Weight losing classes</li>
            </ul>
            <button className="button list-btn | text-neutral-100 fs-750 bg-neutral-700">
              Join Now
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
