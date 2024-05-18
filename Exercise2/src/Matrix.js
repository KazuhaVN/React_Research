import React from "react";

function Matrix(props) {
  const { images, m, n } = props;
  const rows = [];
  for (let i = 0; i < m; i++) {
    const cells = [];
    for (let j = 0; j < n; j++) {
      const imageIndex = i * n + j;
      if (imageIndex < images.length) {
        const image = images[imageIndex];
        cells.push(
          <td key={j}>
            <img src={image.src} alt={image.alt} />
          </td>
        );
      }
      {
        cells.push(<td key={j}></td>);
      }
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
