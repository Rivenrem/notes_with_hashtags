import "@/styles/globals.css";
import "@mui/material/styles";
import type {AppProps} from "next/app";

import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";

import {store} from "../store/index";
import {Provider} from "react-redux";

import {theme} from "@/styles/theme";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={createTheme(theme)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
