import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h1 className="text-dark fw-bold mb-4 py-2">Login</h1>
          <form>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form1Example13"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form1Example13">
                Email address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form1Example23"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="form1Example23">
                Password
              </label>
            </div>
            <div className="d-flex justify-content-around align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  readOnly
                  checked
                />
                <label className="form-check-label" htmlFor="form1Example3">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <NavLink
              to="/checkout"
              className="btn btn-primary btn-lg btn-block"
            >
              Sign in
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
