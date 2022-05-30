import React from "react";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Needs to be implemented</h1>
            <p className="lead mb-4">
              We are working on it. Please checkout later!
            </p>
            <NavLink to="/cybershop" className="btn btn-outline-dark px-3">
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
