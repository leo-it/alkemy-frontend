import React from 'react';
import {urlApi} from "../constants/urls"
import {useFetch} from "../hooks/useFetch"


 const Balance = () => {
    let {data, isPending, error} = useFetch(`${urlApi}operations`)
    console.log(data);
let arrEgreso=[]
let egress=0;
let entry=0
let cash;
    if(data){
     data.operations.map((el)=> {
     el.type=="EGRESO"? egress+=el.mount: entry+=el.mount; 
  
     }

      )
     }

console.log(egress);
console.log(entry);
cash=entry-egress

    return(
  <>
<h1 className="text-center">Cash: ${cash}</h1>

 {

 } </>
   
             
)
        

}
export default Balance