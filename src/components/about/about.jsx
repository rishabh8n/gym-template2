import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { LuBarChart3, LuGanttChartSquare } from "react-icons/lu";
import { RxCountdownTimer } from "react-icons/rx";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="container about_container">
        <p className="fs-600 text-accent-400">WHY CHOOSE US?</p>
        <h2 className="fs-850 fw-bold text-neutral-100">
          PUSH YOUR LIMITS FORWARD
        </h2>
        <div className="about_list">
          <div className="list-item">
            <div className="list_icon">
              <FaDumbbell className="text-accent-400 fs-850" />
            </div>
            <h3 className="fs-750 fw-semi-bold text-neutral-100">
              Modern equipment
            </h3>
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
          <div className="list-item">
            <div className="list_icon">
              <LuBarChart3 className="text-accent-400 fs-850" />
            </div>
            <h3 className="fs-750 fw-semi-bold text-neutral-100">
              Healthy nutrition plan
            </h3>
            <p className="text-neutral-200">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="list-item">
            <div className="list_icon">
              <LuGanttChartSquare className="text-accent-400 fs-850" />
            </div>
            <h3 className="fs-750 fw-semi-bold text-neutral-100">
              Proffesional training plan
            </h3>
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>
          <div className="list-item">
            <div className="list_icon">
              <RxCountdownTimer className="text-accent-400 fs-850" />
            </div>
            <h3 className="fs-750 fw-semi-bold text-neutral-100">
              Unique to your needs
            </h3>
            <p className="text-neutral-200">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
