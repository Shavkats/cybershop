import React from "react";
import about from "../assets/about.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to CyberShop, a global online shop - your number one
              source for both men and women clothing, jewelry and electronics.
              We're dedicated to giving our customers the very best service with
              a focus on dependability and uniqueness and offer them the highest
              quality products from the best brands on the market as we believe
              that our customers deserve the best quality, selection and price.
              <br />
              <br />
              We always strive to provide the highest quality service to our
              customers all over the world and are thrilled to ensure our
              customers exciting shopping experience. We hope you enjoy our
              products as much as we enjoy offering them to you. If you have any
              questions or comments, please don't hesitate to contact us.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={about} alt="About Us" width="600px" height="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
