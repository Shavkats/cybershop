import React from "react";
import Products from "./Products";
import fashion from "../assets/fashion.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src={fashion}
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON TRENDS
            </h5>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
