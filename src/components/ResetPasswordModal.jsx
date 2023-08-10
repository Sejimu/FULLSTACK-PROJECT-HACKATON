import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useAuthContext } from "../contexts/AuthContext";
import { Box, TextField } from "@mui/material";
import { notify } from "./Toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResetPasswordModal() {
  const { open, handleClose, resetPassword } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const data2 = [...data][0][1];
    if (data2.length < 1) {
      alert("fill all fields");
      return;
    }
    resetPassword(data);
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Send activation code to your email."}</DialogTitle>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            // required
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
          />
          <DialogActions>
            <Button onClick={handleClose} type="submit">
              Send
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
