import React, { useState } from "react";
let urlApi = "http://localhost:3000/api/";
const ItemOperation = ({ dataEl }) => {
  /*     console.log(dataEl._id);
   */ 
  const { concept, mount, type, date } = dataEl;
  const [updateConcept, setUpdateConcept] = useState(concept);
  const [updateMount, setUpdateMount] = useState(mount);
  const [updateType, setUpdateType] = useState(type);
  const [updateDate, setUpdateDate] = useState(date);

  const [modify, setModify] = useState(false);
  function handleClick() {
    if (updateConcept || updateMount) {
      fetch(`${urlApi}put-operation/${dataEl._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concept: updateConcept,
          mount: updateMount,
          date: updateDate,
          type: updateType,
        }),
      }).then((res) => res.json())
      .then(res => {
        if(res.ok) window.location.reload();
    });
      
    }
  }

  function handleDelete(){
    fetch(`${urlApi}delete-operation/${dataEl._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: dataEl.id})
    }).then(res => res.json())
    .then(res => {
        if(res.ok) window.location.reload();
    });
  }

  return (
      <>
    <div onClick={() => setModify(true)}>
      {modify ? (
        <>
          <div className="form mx-auto w-50 ">
            <div className="container bg-white p-5 col">
              <div className=" line"></div>
              <div className="mb-3 col-lg-12 formulario">
                <input
                  type="text"
                  onInput={(e) => {
                    setUpdateConcept(e.target.value);
                  }}
                  className="form-control "
                  placeholder={concept}
                />
              </div>
              <div className="mb-3 col-lg-12">
                <input
                  type="number"
                  onInput={(e) => {
                    setUpdateMount(e.target.value);
                  }}
                  className="form-control "
                  placeholder={mount}
                />
              </div>
              <div className=" form-control form-control-sm mb-3 col-lg-12">
                <label type="text" className="form-label tre ">
                  Date {date.substring(0, 10)}{" "}
                </label>
                <input
                  type="date"
                  placeholder={date}
                  onInput={(e) => {
                    setUpdateDate(e.target.value);
                  }}
                  className="form-control "
                />
              </div>

              <div className="mb-3 col-lg-12">
                <select className="form-control form-control-sm"
                  defaultValue={type}
                  onChange={(e) => {
                    setUpdateType(e.target.value);
                  }}
                >
                  <option value="INGRESO">Ingreso</option>
                  <option value="EGRESO">Egreso</option>
                </select>
              </div>
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card-body">
            <h5 className="card-title">
              {dataEl.concept}: ${dataEl.mount}
            </h5>
            <p className="card-text">
              {dataEl.type} Date: {dataEl.date.substring(0, 10)}
            </p>
           
          </div>
        </>
      )}
    </div>
      {modify ? (
        <button className="btn btn-primary publicar-btn" onClick={handleClick}>
          Upload
        </button>
      ) : (
        <button className="btn btn-danger publicar-btn"   onClick={handleDelete} >Delete</button>
      )}
      </>
  );
};
export default ItemOperation;