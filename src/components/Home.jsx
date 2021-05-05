import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Navbar } from "./Navbar";
import ItemOperation from "./ItemOperation";
import Balance from "./Balance";

const Home = () => {
  let url = "http://localhost:3000/api/";
  let { data, isPending, error } = useFetch(`${url}operations`);

  return (
    <>
      <Navbar className="  " />
      <Balance />
      {!data ? (
        <h3>cargando...</h3>
      ) : (
        <div className="text-center">
          {data.operations
            .slice(Math.max(data.operations.length - 10, 1))
            .reverse()
            .map((el, index) => (
              <ItemOperation key={el._id} dataEl={el} />
            ))}
        </div>
      )}
    </>
  );
};

export default Home;
