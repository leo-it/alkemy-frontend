import React,{useEffect, useState} from 'react';
import {useFetch} from "../hooks/useFetch"
import {Navbar} from "./Navbar"
import ItemOperation from "./ItemOperation"
import Balance from './Balance';

const Home = () => {
        let url="http://localhost:3000/api/"
        let {data, isPending, error} = useFetch(`${url}operations`)
/*         console.log(`is pending: ${isPending}`);
        console.log(error);
        console.log(data); */


        return (
    <>
    <Navbar className="  "/>
    <Balance/>
    {!data?(
        <h3>cargando...</h3>
    ):
    //para mostrar solo 10 puedo hacer un for de 10 en reverse()
        <div className="text-center">
            {data.operations.map((el)=>
            <ItemOperation key={el._id} dataEl={el} />
      )}</div>

    }
    </>
    );
    }

export default Home;