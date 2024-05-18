import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import RegisterForm from "./RegisterForm";
export default function RegisterPopUpDialog(props) {
  const { open, setOpen, onRegister } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>Input Information</DialogTitle>
      <DialogContent>
        <RegisterForm onRegister={onRegister} setOpen={setOpen}></RegisterForm>
      </DialogContent>
    </Dialog>
  );
}
