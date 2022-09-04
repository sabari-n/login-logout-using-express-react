import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import {store} from './store'

import { Provider } from 'react-redux'

import App from "./pages/App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();