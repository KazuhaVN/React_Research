import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function RegisterForm(props) {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const { onRegister, setOpen } = props;

  return (
    <div>
      <div>
        <TextField
          label="row"
          onChange={(e) => setRow(e.target.value)}
        ></TextField>
        <TextField
          label="column"
          onChange={(e) => setColumn(e.target.value)}
        ></TextField>
      </div>
      <div>
        <Button variant="contained" onClick={() => onRegister(row, column)}>
          Input
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
