import React,{useState} from 'react';
import {urlApi} from "../constants/urls"

const Form=()=>{

const [mount, setMount] = useState()
const [concept, setConcept] = useState()
const [type, setType] = useState("EGRESS")
const [date, setDate] = useState()
const [category, setCategory] = useState("food")

    function handleClick(){
        if(mount && concept && date && type && category){
            fetch(`${urlApi}post-operation`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({mount, concept, date, type, category})
            }).then(res => res.json())
            .then(res => {
                 window.location.reload();
            });
        }
    }
return(
    <>
<div className="container col-lg-6">
    <div  className=" form mx-auto row bg-white p-5 col" >
            <div ></div>
            <div className="mb-3 col-sm-12 formulario">
                <label  className="form-label tre " id="">Concept</label>
                <input type="text"  onInput={(e) => setConcept(e.target.value)} className="form-control " required/>
            </div>
            <div className="mb-3 col-sm-12">
                <label className="form-label tre ">Mount</label>
                <input type="number" onInput={(e) => setMount(e.target.value)}  className="form-control " required/>
            </div>
            <div className="mb-3  col-sm-12">
                <label type="text" className="form-label tre ">Date</label>
                <input type="date" min="2020-01-01" max="2022-01-01" onInput={(e) => setDate(e.target.value)} className="form-control " required/>
            </div>

            <div className="mb-3  col-sm-12">
                <label className="form-label tre ">Type </label>
                <select defaultValue="EGRESS"   onChange={(e) => setType(e.target.value)} >
                    <option value="ENTRY">Entry</option>
                    <option value="EGRESS">EGRESS</option>
                </select>      
              </div>
            <div className="mb-3  col-sm-12">
            <select defaultValue="food" onChange={(e) => setCategory(e.target.value)} >
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
                <option value="cleaning">Cleaning</option>
                <option value="salary">Salary</option>
                <option value="other">Other</option>

            </select></div>
            <div>
                <button type="button" onClick={handleClick} className="btn btn-primary publicar-btn" >Post</button>
              
            </div> 
    </div>
    <hr/>
 </div>

</>
)
}
export default Form;