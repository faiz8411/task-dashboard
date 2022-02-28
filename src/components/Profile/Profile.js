import { CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import users from "../../images/user_img.jfif"
import logo from '../../images/logo.png'
import Service from '../Service/Service';
import { Button } from '@mui/material';
import { Col, Row } from 'reactstrap';
import TransitionsModal from '../Modal/Modal';
const Profile = () => {
// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const services = [
        {
            id: 1, name: "Jhon Smith", about: "UI developer", email: "abcd@gmail.com",mobile:"+9715535354354",
            birth: "14/09/1992", pin: "123456", address: "delhi",country:"India",education:"MCA"
        }
    ]
    return (
      <>
        <Grid container spacing={2}>
          <CardMedia
            style={{
              marginLeft: "250px",
              marginTop: "20px",
              height: "50px",
              width: "50px",
            }}
            component="img"
            image={logo}
            alt="green iguana"
          />
          <Grid item xs={5}>
            <CardMedia
              style={{
                marginLeft: "100px",
                height: "150px",
                width: "150px",
                borderRadius: "50%",
              }}
              component="img"
              image={users}
            />
          </Grid>
          <Grid item xs={7}>
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
            <div>
              <Row style={{ display: "flex", marginTop: "30px" }}>
                <Col>
                  {" "}
                  <Button
                    variant="outlined"
                   
                    style={{ padding: "0px 10px" ,marginRight:"20px"}}
                  >
                    complete
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <Button
                    onClick={handleOpen}
                    style={{ padding: "0px 10px" }}
                    variant="outlined"
                  >
                    Edit Profile
                  </Button>
                </Col>
              </Row>
            </div>
          </Grid>
        </Grid>

        <TransitionsModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        ></TransitionsModal>
      </>
    );
};

export default Profile;