import { Grid } from '@material-ui/core';
import React from 'react';

const Service = ({ service }) => {
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
                    <span>Higher Education <br />
                        Qualification
                    </span>
            <br />
         
                    <span style={{ color: "gray", textAlign: "left" }}>{ education}</span>
          </div>
           
        </Grid>
      </div>
    );
};

export default Service;