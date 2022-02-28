import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({handleClose,handleOpen,open}) {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                placeholder="Name"
                type="text"
                required
                fullWidth
                // defaultValue="jhon smit"
              />

              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                placeholder="Email"
                type="email"
                required
                fullWidth
                // defaultValue="abcd@gmail.com"
              />

              <TextField
                id="standard-basic"
                label="phone"
                variant="standard"
                placeholder="phone Number "
                type="number"
                required
                fullWidth
                // defaultValue="9715535354354"
              />

              <TextField
                id="standard-basic"
                label="address"
                variant="standard"
                placeholder="address"
                type="text"
                required
                fullWidth
                // defaultValue="delhi"
              />
              <TextField
                id="standard-basic"
                label="about"
                variant="standard"
                placeholder="about"
                type="text"
                required
                fullWidth
                // defaultValue="UI developer"
              />
              <TextField
                id="standard-basic"
                label="date of birth"
                variant="standard"
                placeholder="date of birth"
                type="text"
                required
                fullWidth
                // defaultValue="14/09/1992"
              />

              <Button
                type="submit"
                variant="contained"
                style={{
                  marginTop: "10px",
                  align: "center",
                  marginLeft: "100px",
                }}
              >
                update
              </Button>
              <Button
                style={{
                  algn: "right",
                  marginTop: "10px",
                  marginLeft: "10px",
                  color: "white",
                  backgroundColor: "red",
                }}
                onClick={handleClose}
              >
                cancel
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
