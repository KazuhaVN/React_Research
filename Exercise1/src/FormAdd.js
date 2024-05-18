import React, { useState } from "react";
import Grid from "@mui/material/Grid";
export default function FormAdd(props) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("");
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const maxID = props.maxID;
  const setMaxID = props.setMaxID;

  function getNextID() {
    let id = maxID + 1;
    setMaxID(id);
    return id;
  }
  function handleAdd() {
    let newCustomers = [
      ...customers,
      {
        id: getNextID(),
        name: name,
        birthday: birthday,
        mssv: mssv,
        email: email,
      },
    ];

    setCustomers(newCustomers);
  }
  return (
    <div className="container">
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid md={6}>
          <div className="form-item">
            <div>
              <input
                type="text"
                placeholder="Họ và Tên"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
        </Grid>
        <Grid md={6}>
          <div className="form-item">
            <div>
              <input
                type="text"
                placeholder="MSSV"
                onChange={(e) => setMssv(e.target.value)}
              ></input>
            </div>
          </div>
        </Grid>
        <Grid md={6}>
          <div className="form-item">
            <div>
              <input
                type="text"
                placeholder="Năm sinh"
                onChange={(e) => setBirthday(e.target.value)}
              ></input>
            </div>
          </div>
        </Grid>
        <Grid md={6}>
          <div className="form-item">
            <div>
              <input
                type="text"
                placeholder=" Email "
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
        </Grid>
        <Grid md={12} display="flex" justifyContent="right" alignItems="right">
          <div>
            <button onClick={handleAdd}>Add</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
