import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container contact_container">
        <div className="column">
          <p className="fs-600 text-accent-400">CONTACT US</p>
          <h2 className="fs-850 fw-bold text-neutral-100">GET IN TOUCH</h2>
          <div className="contact_details">
            <div className="contact-item">
              <div className="contact-icon"></div>
              <p className="fs-500 text-neutral-200">
                333 Middle Winchendon Rd, Rindge, NH 03461
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"></div>
              <p className="fs-500 text-neutral-200">
                125-711-811 {"|"} 125-668-886
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"></div>
              <p className="fs-500 text-neutral-200">
                Support.gymcenter@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5619074180267!2d77.2269347743783!3d28.612916684973072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1703498205578!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
