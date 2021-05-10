import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Form from "./Form";
import GetItems from "./GetItems";
import { Redirect } from "react-router-dom";

const Operations = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessiontoken = window.localStorage.getItem("SESSION_TOKEN");
    if (sessiontoken) {
      setToken(sessiontoken);
    }
    setLoading(false);
  }, []);

  if (!loading && !token) return <Redirect to="/login" />;
  else if (loading)
    return (
      <img src="https://media.istockphoto.com/vectors/website-information-loading-frame-icon-vector-id1084034376" />
    );
  return (
    <div>
      <Navbar token={token} />
      <Form token={token} />
      <br />
      <h2 className="text-center">Submit Operations</h2>
      <br />
      <br />
      <hr />
      <GetItems large={100} token={token} />
    </div>
  );
};
export default Operations;
