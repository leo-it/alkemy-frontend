import React from 'react';
import {useFetch} from "../hooks/useFetch"
import Element from "../components/Element"

const Home = () => {
    let url="http://localhost:3000/api/operations"
    let {data, isPending, error} = useFetch(url)
    console.log(isPending);
    console.log(error);
    console.log(data);
    return (
  <>
  {!data?(
      <h3>cargando...</h3>
  ):
 <div className="text-center">{data.operations.map((el)=>
<Element key={el._id} concept={el.concept} type={el.type} mount={el.mount} date={el.date.substring(0,10)}/>
  
 )}</div>
 }
 </>
);
}

export default Home;