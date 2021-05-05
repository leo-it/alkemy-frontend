import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Navbar } from "./Navbar";
import ItemOperation from "./ItemOperation";
import Balance from "./Balance";
import {urlApi} from "../constants/urls"
import Loader from "./Loader";
import GetItems from "./GetItems";


const Home = () => {
 
  let { data } = useFetch(`${urlApi}operations`);
  return (
    <>
      <Navbar className="  " />
    <Balance />
     <div className="mx-auto container ">
<div className="">
      <GetItems large={10}/>

     
</div>
</div>
    </>
  );
};

export default Home;
