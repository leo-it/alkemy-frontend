import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Balance from "./Balance";
import GetItems from "./GetItems";
import { Redirect } from "react-router-dom";

const Home = () => {
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
    <>
      <>
        <Navbar token={token} />
        <Balance token={token} />
        <div className="mx-auto container ">
          <div className="">
            <hr />
            <GetItems large={10} token={token} />
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
