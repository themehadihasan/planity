import React from "react";
import "../testimonial/Testimonial.css";
import TestimonialImage from "../../../assets/testimonial.png";
import Arrow01 from "../../../assets/arrow-01.png";
import Arrow02 from "../../../assets/arrow-02.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonialLeft">
        <h1>
          <span style={{ marginRight: "10px" }}>"</span>
          Testimonial <br /> highlight
          <span style={{ marginLeft: "10px" }}>"</span>
        </h1>
        <p>
          My house became cooler and calmer by adding many beautiful <br />
          plants and very comfortable to look at.
        </p>
        <div>
          <h4>Sila Marsilih</h4>
          <p style={{ paddingBottom: "20px" }}>Artist</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span>
            <img
              src={Arrow01}
              alt="Arrow 01"
              style={{ width: "36px", cursor: "pointer" }}
            />
          </span>
          <span>
            <img
              src={Arrow02}
              alt="Arrow 02"
              style={{ width: "36px", cursor: "pointer" }}
            />
          </span>
        </div>
      </div>
      <div className="testimonialRight">
        <img src={TestimonialImage} alt="Testimonial Image" />
      </div>
    </div>
  );
};

export default Testimonial;
