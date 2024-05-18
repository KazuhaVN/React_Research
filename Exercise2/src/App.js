import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import RegisterPopUpDialog from "./RegisterPopUpDialog";
import Matrix from "./Matrix";
export default function App() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState([
    {
      src: "Picture1.jpg",
      alt: "Image_1",
    },
    {
      src: "Picture2.jpg",
      alt: "Image_2",
    },
    {
      src: "Picture3.jpg",
      alt: "Image_3",
    },
    {
      src: "Picture4.jpg",
      alt: "Image_4",
    },
    {
      src: "Picture5.jpg",
      alt: "Image_5",
    },
    {
      src: "Picture6.jpg",
      alt: "Image_6",
    },
  ]);

  function handleRegister(row, column) {
    setOpen(false);
    setRow(row);
    setColumn(column);
    alert("saved with row : " + row + " and column : " + column);
  }
  return (
    <>
      <Router>
        <ul>
          <button onClick={() => setOpen(true)}>Open Dialog</button>
          <RegisterPopUpDialog
            onRegister={handleRegister}
            open={open}
            setOpen={setOpen}
          ></RegisterPopUpDialog>

          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/matrix"> Matrix </Link>
          </li>
        </ul>

        <Routes>
          <Route
            path="/matrix"
            element={<Matrix images={image} m={row} n={column} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
