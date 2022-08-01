import React, { useState, useEffect } from "react";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const drawerWidth = 240;
const CustomListItem = styled(ListItemText)(`
  font-size: 11,
  `);

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function SideNav(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleDrawer, handleDrawerToggle, open, mobileOpen, window, isMdUp } =
    props;
  const [selectedRoute, setselectedRoute] = useState();
  const [openMenu, setOpenMenu] = React.useState(false);

  useEffect(() => {
    if (location.pathname) {
      setselectedRoute(location.pathname);
    } else {
      setselectedRoute("/");
    }
  }, [location.pathname]);

  const handleListItemClick = (event, route) => {
    event.preventDefault();
    setselectedRoute(route);
    navigate(route);
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const listMenu = (
    <List component="nav">
      <ListItemButton
        selected={selectedRoute === "/"}
        onClick={(event) => handleListItemClick(event, "/")}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <CustomListItem primary="Home" />
      </ListItemButton>
      {/* <Divider sx={{ my: 0.5, mx: 2 }} />  */}
      {/* <ListItemButton
        selected={selectedRoute === "/knowledge"}
        onClick={(event) => handleListItemClick(event, "/knowledge")}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <CustomListItem primary="Knowledge" />
      </ListItemButton> */}

      <Divider sx={{ my: 0.5, mx: 2 }} />
      <ListItemButton
        selected={selectedRoute === "/knowledge"}
        onClick={(event) => handleListItemClick(event, "/knowledge")}
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <CustomListItem primary="Knowledge" />
      </ListItemButton>
      <Divider sx={{ my: 0.5, mx: 2 }} />
      <ListItemButton
        selected={selectedRoute === "/application"}
        onClick={(event) => handleListItemClick(event, "/application")}
      >
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <CustomListItem primary="Application" />
      </ListItemButton>
      <Divider sx={{ my: 0.5, mx: 2 }} />
      <ListItemButton
        selected={selectedRoute === "/other"}
        onClick={(event) => handleListItemClick(event, "/other")}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <CustomListItem primary="Other" />
      </ListItemButton>

      {/* Menu Amin */}
      <Divider sx={{ my: 0, mt: 5, mx: 0 }} />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <CustomListItem primary="ผู้ดูแลระบบ" />
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 5 }}
            selected={selectedRoute === "/kmcategory"}
          // onClick={(event) => handleListItemClick(event, "/kmcategory")}
          >
            <ListItemIcon>
              <GroupIcon fontSize="inherit" />
            </ListItemIcon>
            <CustomListItem primary="ผู้ใช้งาน" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 5 }}
            selected={selectedRoute === "/kmcategory"}
          // onClick={(event) => handleListItemClick(event, "/kmcategory")}
          >
            <ListItemIcon>
              <PlaylistAddCheckIcon fontSize="inherit" />
            </ListItemIcon>
            <CustomListItem primary="จัดการ Knowledge" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );

  return isMdUp ? (
    <CustomDrawer variant={"permanent"} open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <Typography component="div" sx={{ p: 1, textAlign: "center" }}>
          <img
            style={{ width: "150px", height: "80px" }}
            src={require("../../assets/img/logo.png")}
            alt="KMManagement"
            title="KMManagement"
          />
        </Typography>
        <IconButton color="inherit" sx={{ mt: -2 }} onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider sx={{ my: 0 }} />
      {listMenu}
    </CustomDrawer>
  ) : (
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
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Typography component="div" sx={{ pt: 2, textAlign: "center" }}>
        <img
          style={{ width: "150px", height: "80px" }}
          src={require("../../assets/img/logo.png")}
          alt="KMManagement"
          title="KMManagement"
        />
      </Typography>

      {listMenu}
    </Drawer>
  );
}
