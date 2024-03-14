import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Hidden } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HackathonLogo from "../../svgs/hack-logo.svg";
import Line from "../../svgs/line.svg";
import SenecaLogo from "../../svgs/seneca-polytechnic.png";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import "./navBar2.css"; // Make sure this path is correct for your project structure

function ResponsiveAppBar(props: {
  mainNavItems: string[];
  otherNavItems: string[];
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const convertToUrlFormat = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "2px solid red",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderRadius: "100px"
        }}
      >
        <div className="navBarTop">
          <SocialMediaIcons />
        </div>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <a href="/" className="flex">
                <img src={HackathonLogo} alt="Seneca Hackathon 2024's logo" className="logo" />
              </a>
              <img className="line" src={Line} alt="Line" />
              <div className="flex flex-col">
                <span className="hosted-by">hosted by</span>
                <a href="https://www.senecapolytechnic.ca/home.html" target="_blank" rel="noreferrer">
                  <img src={SenecaLogo} alt="Seneca's logo" className="seneca-logo"/>
                </a>
              </div>
            </Box>
            <Hidden mdDown>
              {props.mainNavItems.map((item) => (
                <Link key={item} className="nav-link" to={convertToUrlFormat(item)}>
                  <Button key={item} sx={{ color: "black" }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Hidden>
            <Hidden mdUp>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ mt: "45px" }}
        >
          {/* Menu items */}
        </Menu>
      </AppBar>
      <div className="main-content">
        {/* Main page content goes here */}
      </div>
    </>
  );
}

export default ResponsiveAppBar;
