import React from "react";
import Cell from "./Cell";
function Matrix(props) {
  const { color, m, n } = props;
  const rows = [];
  for (let i = 0; i < m; i++) {
    const cells = [];
    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      cells.push(
        <td key={j}>
          <Cell color={color[index]} />
        </td>
      );
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Matrix;
