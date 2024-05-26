import "./App.css";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Matrix from "./Matrix";
import { Button } from "react-bootstrap";
function App() {
  const [color, setColor] = useState([
    0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  ]);
  const defaultColor = [
    0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  ];
  const [row, setRow] = useState(7);
  const [col, setCol] = useState(3);
  const [moves, setMoves] = useState([]);
  useEffect(() => {
    setColor((prevColor) => {
      const newIndex = row * 6 + col;
      if (prevColor[newIndex] == 2) {
        alert("blocked !");
        setCol(3);
        setRow(7);
        return defaultColor;
      } else {
        const newColor = prevColor.map((element) => {
          if (element === 1) {
            return 0;
          }
          return element;
        });

        newColor[newIndex] = 1;
        return newColor;
      }
    });
  }, [row, col]);
  function clickUp() {
    setMoves((prevMoves) => [...prevMoves, 1]);
  }
  function clickDown() {
    setMoves((prevMoves) => [...prevMoves, 2]);
  }
  function clickLeft() {
    setMoves((prevMoves) => [...prevMoves, 3]);
  }
  function clickRight() {
    setMoves((prevMoves) => [...prevMoves, 4]);
  }
  function handleUp(callback) {
    setRow((prevRow) => {
      let a = prevRow - 1;
      if (a < 0) {
        callback();
        return prevRow;
      } else {
        setColor((prevColor) => {
          const newColor = [...prevColor];
          const newindex = a * 6 + col;
          const oldindex = prevRow * 6 + col;
          if (newColor[newindex] === 2) {
            a = a + 1;
            return prevColor;
          } else {
            newColor[oldindex] = 0;
            newColor[newindex] = 1;
            return newColor;
          }
        });
        callback();
        return a;
      }
    });
  }

  function handleDown(callback) {
    setRow((prevRow) => {
      let a = prevRow + 1;
      if (a > 7) {
        callback();
        return prevRow;
      } else {
        setColor((prevColor) => {
          const newColor = [...prevColor];
          const newindex = a * 6 + col;
          const oldindex = prevRow * 6 + col;
          if (newColor[newindex] === 2) {
            a = a - 1;
            return prevColor;
          } else {
            newColor[oldindex] = 0;
            newColor[newindex] = 1;
            return newColor;
          }
        });
        callback();
        return a;
      }
    });
  }

  function handleLeft(callback) {
    setCol((prevCol) => {
      let a = prevCol - 1;
      if (a < 0) {
        callback();
        return prevCol;
      } else {
        setColor((prevColor) => {
          const newColor = [...prevColor];
          const newindex = row * 6 + a;
          const oldindex = row * 6 + prevCol;
          if (newColor[newindex] === 2) {
            a = a + 1;
            return prevColor;
          } else {
            newColor[oldindex] = 0;
            newColor[newindex] = 1;
            return newColor;
          }
        });
        callback();
        return a;
      }
    });
  }

  function handleRight(callback) {
    setCol((prevCol) => {
      let a = prevCol + 1;
      if (a > 5) {
        callback();
        return prevCol;
      } else {
        setColor((prevColor) => {
          const newColor = [...prevColor];
          const newindex = row * 6 + a;
          const oldindex = row * 6 + prevCol;
          if (newColor[newindex] === 2) {
            a = a - 1;
            return prevColor;
          } else {
            newColor[oldindex] = 0;
            newColor[newindex] = 1;
            return newColor;
          }
        });
        callback();
        return a;
      }
    });
  }

  function performMove(move) {
    return new Promise((resolve) => {
      switch (move) {
        case 1:
          handleUp(resolve);
          break;
        case 2:
          handleDown(resolve);
          break;
        case 3:
          handleLeft(resolve);
          break;
        case 4:
          handleRight(resolve);
          break;
        default:
          resolve();
          break;
      }
    });
  }

  async function clickRun() {
    for (let i = 0; i < moves.length; i++) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await performMove(moves[i]);
          resolve();
        }, 1000 * i);
      });
    }
    setMoves([]);
  }
  return (
    <div>
      <Container className="container-main">
        <Row>
          <Col md={6} className="container1">
            <Matrix m={8} n={6} color={color} />
          </Col>
          <Col md={5} className="container2">
            <Container>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary" onClick={clickUp}>
                    Move Up
                  </Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary" onClick={clickDown}>
                    Move Down
                  </Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary" onClick={clickLeft}>
                    Move Left
                  </Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary" onClick={clickRight}>
                    Move Right
                  </Button>
                </div>
              </Row>
              <Row className="row-margin-bot">
                <div className="button-med">
                  <Button variant="success" onClick={clickRun}>
                    Run
                  </Button>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
