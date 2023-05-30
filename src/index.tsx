import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//local dependencies
import "./style/index.scss";
import { theme } from "./config/theme";
import LayoutPages from "./layout/LayoutPages";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <LayoutPages>
          <App />
        </LayoutPages>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
