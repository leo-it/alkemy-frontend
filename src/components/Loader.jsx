import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mx-auto lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loader;
