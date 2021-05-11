import React, { useState, useEffect } from "react";
import { urlApi } from "../constants/urls";
import Loader from "./Loader";
import ItemOperation from "./ItemOperation";
import { Navbar } from "./Navbar";
import { Redirect } from "react-router-dom";

const Category = (props) => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [category, setCategory] = useState("salary");

  useEffect(() => {
    const sessiontoken = window.localStorage.getItem("SESSION_TOKEN");
    if (sessiontoken) {
      setToken(sessiontoken);
    }
    setLoading(false);
  }, []);


  useEffect(() => {
    fetch(`${urlApi}operations/category/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setData(res);
        }
      });
  }, [token, category]);
  /*    getOperations()
   */
  function handleClick(e) {
    setCategory(e.target.value);
  }

  if (!loading && !token) return <Redirect to="/login" />;
  else if (loading) return <Loader />;

  return (
    <>
      <Navbar token={token}/>
      <br />
      <div className="text-center">
        <button
          value="food"
          onClick={handleClick}
          className="btn btn-secondary publicar-btn"
        >
          Food
        </button>
        <button
          value="salary"
          onClick={handleClick}
          className="btn btn-secondary publicar-btn"
        >
          Salario
        </button>
        <button
          value="cleanning"
          onClick={handleClick}
          className="btn btn-secondary publicar-btn"
        >
          Cleanning
        </button>
        <button
          value="clothes"
          onClick={handleClick}
          className="btn btn-secondary publicar-btn"
        >
          Clothes
        </button>
        <button
          value="other"
          onClick={handleClick}
          className="btn btn-secondary publicar-btn"
        >
          Other
        </button>
      </div>
      <br /> <hr />
      {!data ? (
        <>
          <Loader />
          <h1>elig</h1>
        </>
      ) : (
        <>
          {data.operations.length === 0 ? (
            <div className="text-center">
              <h1>You did not register any movement </h1>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          ) : (
            <div className="text-center">
              {data.operations
                .slice(Math.max(data.operations.length - props.large, 0))
                .reverse()
                .map((el, index) => (
                  <ItemOperation key={el._id} dataEl={el} />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Category;
