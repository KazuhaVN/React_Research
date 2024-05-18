import React from "react";
export default function Cell(props) {
  const { color } = props;
  return color == 1 ? (
    <div className="div-cellblank">
      <img src="Mario.png" alt="Mario" className="img-fit" />
    </div>
  ) : color == 2 ? (
    <div className="div-cellblock"></div>
  ) : color == 3 ? (
    <div className="div-cellblank">
      <img src="Diamond.png" alt="Diamond" className="img-fit" />
    </div>
  ) : (
    <div className="div-cellblank"></div>
  );
}
