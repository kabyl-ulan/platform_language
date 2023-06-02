import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    );
  }
}

export default App;
