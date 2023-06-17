import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

//local dependencies
import "./style/index.scss";
import { theme } from "./config/theme";
import LayoutPages from "./layout/LayoutPages";
import { store } from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Provider store={store()}>
          <LayoutPages>
            <App />
          </LayoutPages>
        </Provider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
