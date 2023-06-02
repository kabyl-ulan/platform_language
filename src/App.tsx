import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

//local
import { AllCoursePage, HomePage } from "./pages";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-course" element={<AllCoursePage />} />
        </Routes>
      </>
    );
  }
}

export default App;
