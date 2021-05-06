import React from "react";
import { Navbar } from "./Navbar";
import Balance from "./Balance";
import GetItems from "./GetItems";


const Home = () => {
 
  return (
    <>
      <Navbar className="  " />
    <Balance />
     <div className="mx-auto container ">
<div className="">
      <GetItems large={10} type={true}/>

     
</div>
</div>
    </>
  );
};

export default Home;
