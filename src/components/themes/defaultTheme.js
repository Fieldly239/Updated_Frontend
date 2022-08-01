const themes = {
  typography: {
    fontFamily: ["ntlbold"],
    fontSize: 16,
  },

  palette: {
    header: {
      light: "#85929E",
      main: "#17202A",
      dark: "#17202A",
      contrastText: "#fff",
    },
    primary: {
      light: "#85929E",
      main: "#85929E",
      dark: "#17202A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#024BB5",
      main: "#065DDC",
      dark: "#024BB5",
      contrastText: "#000",
    },
    textfield: {
      light: "#85929E",
      main: "#85929E",
      dark: "#ba000d",
      contrastText: "#000",
    },
    btadd: {
      light: "#ff7961",
      main: "#F7651C",
      dark: "#F5580A",
      contrastText: "#000",
    },
    btcat: {
      main: "#0E769C",
      contrastText: "#fff",
    },
    btapp: {
      main: "#FC9249",
      contrastText: "#fff",
    },
    btRed: {
      dark: "#F5580A",
      main: "#F5580A",
      dark: "#F72424",
      contrastText: "#fff",
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
        paper: {
          backgroundColor: "#17202A ",
          color: "#fff",
          "& .MuiTypography-root": {
            fontSize: "16px",
            color: "#",
          },
          "& .MuiListItemIcon-root": {
            color: "inherit",
          },
          "& .MuiListItemButton-root.Mui-selected": {
            backgroundColor: "#F7651C",
          },
          "& .MuiListItemButton-root:hover": {
            backgroundColor: "#212F3C",
            "&, & .MuiListItemIcon-root": {
              color: "#fff",
            },
          },
          "& .MuiDivider-root": {
            backgroundColor: "currentColor",
            opacity: 0.3,
            fontSize: [11, "!important"], //Insert your required size
          },
        },
      },
    },
  },
};

export default themes;
