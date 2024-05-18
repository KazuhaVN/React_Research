import React, { useState } from "react";

export default function FormEdit(props) {
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const { index, open, setOpen } = props;
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("");

  function handleSave() {
    let currentCustomers = customers;
    let c = currentCustomers[index];
    c.name = name;
    c.birthday = birthday;
    c.mssv = mssv;
    c.email = email;
    setCustomers([...currentCustomers]);
    setName("");
    setBirthday("");
    setMssv("");
    setEmail("");
    setOpen(false);
  }
  return open == false ? null : (
    <div className="container3">
      <div className="form-item">
        <div>Name</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="form-item">
        <div>Ngày sinh</div>
        <div>
          <input
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="form-item">
        <div>MSSV</div>
        <div>
          <input
            type="text"
            value={mssv}
            onChange={(e) => setMssv(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="form-item">
        <div>Email</div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
