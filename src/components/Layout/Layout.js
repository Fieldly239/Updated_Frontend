import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import defaulTheme from "../themes/defaultTheme";
import "../../assets/style";
import useMediaQuery from "@mui/material/useMediaQuery";

const mdTheme = createTheme(defaulTheme);
const handleResize = () => {
  if (window.innerWidth < 720) {
    return false;
  } else {
    return true;
  }
};

export default function Layout() {
  const [open, setOpen] = React.useState(handleResize);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMdUp = useMediaQuery(mdTheme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          toggleDrawer={toggleDrawer}
          handleDrawerToggle={handleDrawerToggle}
          open={open}
          isMdUp={isMdUp}
          mobileOpen={mobileOpen}
        />

        <SideNav
          toggleDrawer={toggleDrawer}
          handleDrawerToggle={handleDrawerToggle}
          open={open}
          mobileOpen={mobileOpen}
          isMdUp={isMdUp}
        />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth={false}
            sx={{
              mt: 4,
              mb: 4,
              minHeight:
                "calc(100vh - calc(5.25rem + 1px) - calc(5.25rem + 1px))",
            }}
          >
            <Outlet />
          </Container>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
