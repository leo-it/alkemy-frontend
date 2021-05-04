import React,{useEffect, useState} from 'react';
import {useFetch} from "../hooks/useFetch"
import {Navbar} from "./Navbar"
import ItemOperation from "./ItemOperation"

const Home = () => {
        let url="http://localhost:3000/api/"
        let {data, isPending, error} = useFetch(`${url}operations`)
        console.log(`is pending: ${isPending}`);
        console.log(error);
        console.log(data);


        return (
    <>
    <Navbar/>
    {!data?(
        <h3>cargando...</h3>
    ):
    
    <div className="text-center">
        {data.operations.map((el)=>
        <ItemOperation key={el._id} dataEl={el} />

        

    )}</div>
    }
    </>
    );
    }

export default Home;