import React from "react";
import { Navbar } from "./Navbar";
import Form from "./Form";
import GetItems from "./GetItems";

const Operations = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <br />
      <h2 className="text-center">Submit Operations</h2>
      <br/>
      <br/>
      <hr/>
      <GetItems large={100} />
    </div>
  );
};
export default Operations;
