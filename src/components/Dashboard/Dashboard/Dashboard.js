import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { padding } from "@mui/system";
import Profile from "../../Profile/Profile";
import { CardMedia } from "@material-ui/core";
import user from '../../../images/user_img.jfif'
import { Col, Row } from 'reactstrap';
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PermScanWifiOutlinedIcon from "@mui/icons-material/PermScanWifiOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import NfcOutlinedIcon from "@mui/icons-material/NfcOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    const avatarStyle = {
      color: "#68CD02 ",
        height: "15px",
      
    };
    const dashAvatar = {
        background: "#530395 ",
        margin: "20px"
        
    };
  const drawer = (
    <div>
      <Box>
        <Row style={{ display: "flex", background: "#022C18 " }}>
          <Col>
            <CardMedia
              style={{
                marginTop: "20px",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
              component="img"
              image={user}
              alt="green iguana"
            />
          </Col>
          <Col>
            <Typography
              style={{ marginTop: "30px", marginLeft: "10px", color: "white" }}
            >
              Faiz Ullah
            </Typography>
            <Typography style={{ textAlign: "left" }}>
              <CircleRoundedIcon style={avatarStyle} />
              <span style={{ color: "#68CD02" }}>online</span>
            </Typography>
          </Col>
        </Row>
      </Box>

      <List style={{ backgroundColor: "black" }}>
        <ListItem
          style={{ color: "wheat", padding: "10px,10px", marginTop: "20px" }}
        >
          <DashboardOutlinedIcon style={{ color: "#F76D02  " }} />
          <span style={{ marginLeft: "10px" }}>Dashboard</span>{" "}
          <ArrowDropDownOutlinedIcon />
        </ListItem>
        <ListItem style={{ color: "wheat", marginTop: "20px" }}>
          <AccessTimeOutlinedIcon style={{ color: "#F10804 " }} />
          <span style={{ marginLeft: "10px" }}>Enterprise setup</span>
          <ArrowDropDownOutlinedIcon />
        </ListItem>
        <ListItem style={{ color: "wheat", marginTop: "20px" }}>
          <PermScanWifiOutlinedIcon style={{ color: "#530395" }} />
          <span style={{ marginLeft: "10px" }}>Compiling Management</span>{" "}
        </ListItem>
        <ListItem style={{ color: "wheat", marginTop: "20px" }}>
          <GridOnOutlinedIcon style={{ color: "#DB0278 " }} />
          <span style={{ marginLeft: "10px" }}>
            Profile Building & sales
          </span>{" "}
        </ListItem>
        <ListItem style={{ color: "wheat", marginTop: "20px" }}>
          <NfcOutlinedIcon style={{ color: "#037FDC " }} />
          <span style={{ marginLeft: "5px" }}>Financial Management</span>{" "}
          <ArrowDropDownOutlinedIcon
            style={{ width: "13px", height: "30px" }}
          />
        </ListItem>
        <ListItem style={{ color: "wheat", marginTop: "20px" }}>
          <SettingsOutlinedIcon style={{ color: "#F76D02" }} />
          <span style={{ marginLeft: "10px" }}>Exit</span>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            
          >
           <Profile></Profile>
            
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Typography paragraph>content here</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
