import React, { useEffect, useState } from 'react';
import { urlApi } from "../constants/urls";
import { useFetch } from "../hooks/useFetch";
import {Redirect} from 'react-router-dom';

const Balance = () => {

  const [token, setToken] = useState();
  const [data, setData] = useState();
 
    useEffect(() => {
      const sessiontoken = window.localStorage.getItem('SESSION_TOKEN');
      if(sessiontoken){
          setToken(sessiontoken)
      };
  }, []);


  function getOperations(){

   fetch(`${urlApi}operations`,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
      }
  })
  .then(res => res.json())
    .then(res => { if(res){ setData(res)}
  })
}
  
useEffect(getOperations, []);


  let egress = 0;
  let entry = 0;
  let cash;
  if (data) {
    data.operations.forEach((el) => {
      el.type === "EGRESS" ? (egress += el.mount) : (entry += el.mount);
    });
  }
  cash = entry - egress;
 
  return (
    <>
       <div className="mx-auto mb-3 card w-50">
        <div className="card-body text-center">
          {cash > 0 ? (
            <h3 className="card-title text-info">Cash: ${cash} </h3>
          ) : (
            <h3 className="card-title text-danger">Cash: ${cash} </h3>
          )}
          <p className="card-text"> Last ten movements </p>
        </div>
      </div>
      {}{" "} 
    </>
  );
};
export default Balance;
