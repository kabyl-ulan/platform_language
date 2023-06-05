import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

//local
import { AllCoursePage, HomePage } from "./pages";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-course" element={<AllCoursePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
