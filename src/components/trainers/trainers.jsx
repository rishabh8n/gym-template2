import React from "react";
import "./trainer.css";
import item1 from "../../assets/list-item1.jpg";

const Trainers = () => {
  return (
    <div id="trainer">
      <div className="container trainer_container">
        <p className="fs-600 text-accent-400">MEET OUR TRAINER</p>
        <h2 className="fs-850 fw-bold text-neutral-100">TRAIN WITH EXPERT</h2>
        <div className="trainer_info">
          <img src={item1} alt="" />
          <div>
            <h3 className="fs-750 fw-semi-bold text-neutral-100">
              ATHART RACHEL
            </h3>
            <p className="fs-600 fw-semi-bold text-neutral-200">OUR TRAINER</p>
            <p className="text-neutral-200 fs-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              exercitationem omnis placeat ipsum ducimus eum! Facilis nostrum
              omnis nam iste molestias officiis quis ea dicta debitis itaque!
              Amet, repellendus corrupti!
            </p>
            <p className="text-neutral-200 fs-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              exercitationem omnis placeat ipsum ducimus eum! Facilis nostrum
              omnis nam iste molestias officiis quis ea dicta debitis itaque!
              Amet, repellendus corrupti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
