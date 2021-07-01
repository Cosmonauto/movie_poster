import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import StarsIcon from "@material-ui/icons/Stars";
import Drawer from "./Drawer/Drawer";
import moviePosterLogo from "../../assets/icons/movieLOGO.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchBar from "../SearchBar/SearchBar";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [search, setSearch] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/favorite">
          <IconButton color="inherit">
            <Badge color="primary">
              <StarsIcon />
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to="/login">
          <IconButton color="inherit">
            <Badge color="primary">
              <AccountCircle />
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        style={{
          backgroundColor: "rgb(255, 0, 0)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Drawer />
          </IconButton>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              <img
                width="100px"
                src={moviePosterLogo}
                alt="logo of Movie Poster"
                style={{ width: "150px" }}
              />
            </Typography>
          </Link>

          <SearchIcon
            onClick={() => {
              setSearch(true);
            }}
          />
          {search === true ? <SearchBar /> : null}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/" style={{ color: "#fff" }}>
              <IconButton color="inherit">
                <Badge>
                  <HomeIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link style={{ color: "#fff" }} to="/favorite">
              <IconButton color="inherit">
                <Badge color="primary">
                  <StarsIcon />
                </Badge>
              </IconButton>
            </Link>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Login with Firebase</MenuItem>
              </Link>
              <Link to="/signInServer" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Login with Server</MenuItem>
              </Link>
            </Menu>
          </div>
          <div className={classes.sectionMobile}>
            <Link to="/">
              <IconButton color="inherit">
                <Badge>
                  <HomeIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1340 180">
        <path
          fill="rgb(255, 0, 0)"
          fill-opacity="1"
          d="M0,128L26.7,149.3C53.3,171,107,213,160,202.7C213.3,192,267,128,320,112C373.3,96,427,128,480,133.3C533.3,139,587,117,640,101.3C693.3,85,747,75,800,64C853.3,53,907,43,960,74.7C1013.3,107,1067,181,1120,202.7C1173.3,224,1227,192,1280,170.7C1333.3,149,1387,139,1413,133.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
