import React, { useState } from "react";
import { urlApi } from "../constants/urls";
import { Navbar } from "./Navbar";
/* import swal from 'sweetalert'
 */

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleClick(e) {
    e.preventDefault();
    if (password && email) {
      fetch(`${urlApi}signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          window.location.reload();
        });
    } else {
      console.log("error signup ");
    }
  }

  return (

    <>
        <Navbar/>

      <div className="container text.center">
        <div className="row">
          <div className="form-group col-md-4 white mx-auto pb-3">
            <div className="card-header bg-white">
              <h4 className="text">Acount Register </h4>
            </div>
            <div className="card-body bg-white">
              <form action="">
                <div className="form-group pb-2">
                  <input
                    onInput={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group pb-2">
                  <input
                    onInput={(e) => setPassword(e.target.value)}
                    type="password"
                    id="signup-password1"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="form-group pb-2">
                  <button onClick={handleClick} className="btn  btn-primary">
                    Signup
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

export default Signup;
