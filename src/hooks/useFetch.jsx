import { useState, useEffect } from 'react';

export const useFetch=(url)=>{
const [data, setData] = useState(null);//en esta variable controilo los datos que vienen, serian los pokemon en el ej anterior
const [isPending, setIsPending] = useState(true)//una variable que este pendiente de la peticion, y cuando nos regresa la respuesta ya se resolvio
const [error, setError] = useState(null)

useEffect(() => {
    const getData= async(url)=>{ //esta si la vuelvo asincrona
       try{
        let res= await fetch(url)

        if(!res.ok){//si es falso si no hay respuesta
            throw{
                err:true,
                 status:res.status,
                  statusText:!res.statusText?"ocurrio un error":res.statusText,
         }   
        }
         //el throw es como el return de los errores
         //en caso de que no haya existido un error
        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({err:false});
       }catch (err) {
        setIsPending(true);
        setError({err});
       }
    }
 getData(url)
},[url])
return {data,isPending,error}

}