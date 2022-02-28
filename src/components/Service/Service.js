import { Grid } from '@material-ui/core';

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


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

const Service = ({ service,handleClose,open }) => {
  

  const {
    id,
    name,
    about,
    email,
    birth,
    pin,
    address,
    country,
    education,
    mobile,
  } = service;

  return (
    <>
      <div>
        <Grid style={{}}>
          <div style={{ textAlign: "left", marginLeft: "70px" }}>
            <h5>{name}</h5>
            <p style={{ fontWeight: 400 }}>
              About:<span style={{ color: "gray" }}>{about}</span>
            </p>
            <p style={{ color: "gray" }}>{email}</p>
            <p style={{ color: "gray" }}>{mobile}</p>
          </div>
          <div style={{ marginTop: "50px" }}>
            <span>date of birth</span>
            <br />

            <span style={{ color: "gray" }}>{birth}</span>
          </div>
          <div style={{ marginTop: "30px" }}>
            <span>Address</span>
            <br />
            <span style={{ color: "gray", textAlign: "left" }}>{address}</span>
            <br />
            <span style={{ color: "gray", textAlign: "left" }}>pin:{pin}</span>
          </div>
          <div style={{ marginTop: "30px" }}>
            <span>
              Higher Education <br />
              Qualification
            </span>
            <br />

            <span style={{ color: "gray", textAlign: "left" }}>
              {education}
            </span>
          </div>
        </Grid>
      </div>
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
   
    </>
  );
};

export default Service;