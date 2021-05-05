import React from 'react';
import {urlApi} from "../constants/urls"
import {useFetch} from "../hooks/useFetch"


 const Balance = () => {
    let {data} = useFetch(`${urlApi}operations`)
/*     console.log(data);
 */let egress=0;
let entry=0
let cash;
    if(data){
      data.operations.forEach(el=>{
        el.type==="EGRESS"? egress+=el.mount : entry+=el.mount; 

      })
    /*  data.operations.map((el)=> {
     el.type==="EGRESS"? egress+=el.mount : entry+=el.mount; 
     }
    ) */
     }

/* console.log(egress);
console.log(entry); */
cash=entry-egress

    return(
  <>
<div className="mx-auto mb-3 card w-50">
  <div className="card-body text-center">
   {cash>0? <h3 className="card-title text-info">Cash: ${cash} </h3>:<h3 className="card-title text-danger">Cash: ${cash} </h3> }
    <p className="card-text"> Last ten movements </p>
  </div>
</div>
 {

 } </>
   
             
)
        

}
export default Balance