import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { urlApi } from "../constants/urls";
import { Redirect } from "react-router-dom";
import Signup from "./Signup";
import "./Login.css"
import swal from "sweetalert";


const Login = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("SESSION_TOKEN", token);
    }
  }, [token]);
  useEffect(() => {
    const sessiontoken = window.localStorage.getItem("SESSION_TOKEN");
    if (sessiontoken) {
      setToken(sessiontoken);
    }
    setLoading(true);
  }, []);
  function handleClick(e) {
    e.preventDefault();
    if (password && email) {
      fetch(`${urlApi}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((res) => setToken(res.token))

    } else {
        swal("Email or password is missing")
    }
  }

  if (loading && token) return <Redirect to="/" />;

  console.log(token);
  return (
    <>
      <Navbar />
<br />
      <div className="container">
        <div className="row">
          <div className="form-group mx-auto  col-md-4 pb-3">
            <div className="card-header bg-white">
              <h4>Login</h4>
            </div>
            <div className="card-body bg-white">
              <form action="">
                <div className="form-group pb-2">
                  <input
                    type="email"
                    onInput={(e) => setEmail(e.target.value)}
                    id="signup-email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group pb-2">
                  <input
                    type="password"
                    onInput={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="form-group mx-auto col-md-4 pb-3"></div>
                <div className="form-group pb-2">
                  <button onClick={handleClick} className="btn btn-primary ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
