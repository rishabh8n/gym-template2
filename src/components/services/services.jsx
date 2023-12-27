import React from "react";
import item1 from "../../assets/list-item1.jpg";
import item2 from "../../assets/list-item2.jpg";
import item3 from "../../assets/list-item4.jpg";
import "./services.css";

const Services = () => {
  return (
    <div id="services">
      <div className="container services_container">
        <p className="fs-600 text-accent-400">OUR CLASSES</p>
        <h2 className="fs-850 fw-bold text-neutral-100">WHAT WE OFFER</h2>
        <div className="services_list">
          <div className="list-item">
            <img src={item1} alt="" />
            <div>
              <p className="text-accent-400 fs-300">STRENGTH</p>
              <h3 className="fs-750 fw-semi-bold text-neutral-100">
                WEIGHTLIFTING
              </h3>
            </div>
          </div>
          <div className="list-item">
            <img src={item2} alt="" />
            <div>
              <p className="text-accent-400 fs-300">CARDIO</p>
              <h3 className="fs-750 fw-semi-bold text-neutral-100">
                INDOOR CYCLING
              </h3>
            </div>
          </div>
          <div className="list-item">
            <img src={item3} alt="" />
            <div>
              <p className="text-accent-400 fs-300">MEDITATION</p>
              <h3 className="fs-750 fw-semi-bold text-neutral-100">YOGA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
