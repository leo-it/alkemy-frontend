import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Balance from "./Balance";
import GetItems from "./GetItems";
import { Redirect } from "react-router-dom";
import Loader from "./Loader";

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
      <Loader />
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
