import React, { useState } from "react";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HackathonLogo from "../../svgs/hack-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBar.css";

const drawerWidth = 240;

interface DrawerAppBarProps {
  navItems: string[];
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = ({ navItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const convertToUrlFormat = (text: string): string => {
    if (text === navItems[0]) return "/";
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" className="nav-link">
        <img
          src={HackathonLogo}
          alt="Seneca Hackathon 2024's logo"
          width={100}
          height={100}
        />
        <div className="hosted-by">hosted by</div>
        <img
          src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg"
          alt="Seneca College's logo"
          width={80}
          height={30}
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} className="nav-link" to={convertToUrlFormat(item)}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          top: 0,
          borderBottom: "2px solid red",
          boxShadow: "none",
        }}
      >
        <div className="navBarTop">
          <SocialMediaIcons />
        </div>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Container>
              <Link to="/" className="nav-link">
                <Row>
                  <Col sm="auto">
                    <img
                      src={HackathonLogo}
                      alt="Seneca Hackathon 2024's logo"
                      width={85}
                      height={85}
                    />
                  </Col>
                  <Col sm="auto" className="d-flex align-items-center">
                    <Container>
                      <Row>
                        <div className="hosted-by">hosted by</div>
                      </Row>
                      <Row>
                        <img
                          src="https://www.senecacollege.ca/content/dam/projects/seneca/seneca-logo.svg"
                          alt="Seneca College's logo"
                          width={80}
                          height={30}
                        />
                      </Row>
                    </Container>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    {navItems.map((item) => (
                      <Link
                        key={item}
                        className="nav-link"
                        style={{ display: "flex" }}
                        to={convertToUrlFormat(item)}
                      >
                        <Button key={item} sx={{ color: "black" }}>
                          {item}
                        </Button>
                      </Link>
                    ))}
                  </Col>
                </Row>
              </Link>
            </Container>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
      </nav>
    </Box>
  );
};

export default DrawerAppBar;