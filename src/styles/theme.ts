export const theme = {
  palette: {
    error: {
      main: "#c1b6ff",
      dark: "#c1b6ff",
      light: "#c1b6ff",
      contrastText: "#c1b6ff",
    },

    text: {
      primary: "#000000",
      disabled: "#5C5C5C",
      secondary: "#5C5C5C",
    },

    primary: {
      main: "#c1b6ff",
      dark: "#4284f3",
      light: "#c1b6ff",
      contrastText: "#ffffff",
    },
  },

  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(","),

    button: {
      fontSize: "16px",
      textTransform: undefined,
    },

    caption: {
      fontSize: "12px",
    },

    h3: {
      fontSize: "45px",
      fontWeight: 500,
      "@media (max-width:850px)": {
        fontSize: "35px",
      },
      "@media (max-width:450px)": {
        fontSize: "30px",
      },
    },

    subtitle1: {
      fontSize: "20px",
      lineHeight: "30px",
      "@media (max-width:376px)": {
        fontSize: "15px",
      },
    },

    subtitle2: {
      color: "#000000",
      fontWeight: 300,
      fontSize: "15px",
    },

    body1: {
      color: "#000000",
      fontWeight: 300,
      fontSize: "16px",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
};
