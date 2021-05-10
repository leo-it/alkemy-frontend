import React,{useState} from 'react';
import {Navbar} from './Navbar'
import { urlApi } from "../constants/urls";
/* import swal from 'sweetalert'
 */

const Signup=()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleClick(e) {
        e.preventDefault()
    if (password && email) {
        fetch(`${urlApi}signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  email, password }),
        })
          .then((res) => res.json())
          .then((res) => {
            {console.log(res)}
            window.location.reload();
          });
      }else{
          console.log("error signup ");
      }
    }





return(
<>
<div className="container text.center">
                    <form id="signup-form row">
                        <div className="form-group col-md-4  mx-auto pb-3">
                        <h4 className="text">Signup </h4>

                            <input onInput={(e) => setEmail(e.target.value)} type="email"  className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group  col-md-4 mx-auto pb-3">
                            <input onInput={(e) => setPassword(e.target.value)}
                            type="password" id="signup-password1" className="form-control"
                                placeholder="password" />
                                                        <button onClick={handleClick} className="btn  btn-primary">Signup</button>

                        </div>
                      
                    </form>
                </div>
</>
                )
         }

        export default Signup;