import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Grid from "@mui/material/Grid";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "rgba(255, 255, 255, 255)",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

export default function Header(props) {
  const { toggleDrawer, open, handleDrawerToggle, mobileOpen, isMdUp } = props;

  return isMdUp ? (
    <CustomAppBar position="absolute" open={open} color="header">
      <Toolbar variant="regular" sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "10px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
          }}
        >
          {open ? (
            <Grid container spacing={2} sx={{ mt: "1px", ml: -1 }}>
              <AccountCircleIcon fontSize="medium" color="warning" />
              <Typography variant="subtitle1" component="div" sx={{ ml: 0.4 }}>
                Admin
              </Typography>
            </Grid>
          ) : (
            <Typography>
              <img
                // width={"20%"}
                style={{ width: "90px", height: "48px" }}
                src={require("../../assets/img/logo.png")}
                // alt="License Manager"
                // title="License Manager"
                sx={{
                  ml: 0.1,
                  flexGrow: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              />
            </Typography>
          )}
        </Typography>

        <IconButton color="inherit">
          <Badge
            badgeContent={0}
            color="secondary"
            sx={{ justifyContent: "flex-end" }}
          >
            <LightTooltip title="Logout" fontSize="small">
              <LogoutIcon />
            </LightTooltip>
          </Badge>
        </IconButton>
      </Toolbar>
    </CustomAppBar>
  ) : (
    <AppBar
      position="fixed"
      color="header"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar variant="regular" sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            marginRight: "10px",
            ...(mobileOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: [1],
          }}
        >
          <Grid container spacing={2} sx={{ mt: "1px", ml: -1 }}>
            <AccountCircleIcon fontSize="medium" color="warning" />
            <Typography variant="subtitle1" component="div" sx={{ ml: 0.4 }}>
              Admin
            </Typography>
          </Grid>
        </Typography>

        <IconButton color="inherit">
          <Badge
            badgeContent={0}
            color="secondary"
            sx={{ justifyContent: "flex-end" }}
          >
            <LightTooltip title="Logout" fontSize="small">
              <LogoutIcon />
            </LightTooltip>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
