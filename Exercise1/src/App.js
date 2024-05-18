import "./App.css";
import React, { useState } from "react";
import FormAdd from "./FormAdd";
import List from "./List";
import FormEdit from "./FormEdit";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [customers, setCustomers] = useState([]);
  const [maxID, setMaxID] = useState(0);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container3">
        <FormAdd
          customers={customers}
          setCustomers={setCustomers}
          maxID={maxID}
          setMaxID={setMaxID}
        />
      </div>
      <div className="container2">
        <List
          customers={customers}
          setCustomers={setCustomers}
          setOpen={setOpen}
          setIndex={setIndex}
        />
      </div>
      <FormEdit
        open={open}
        customers={customers}
        setCustomers={setCustomers}
        index={index}
        setOpen={setOpen}
      />
    </>
  );
}
