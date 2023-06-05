import { Component, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

//local
import { AllCoursePage, HomePage } from "./pages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-course" element={<AllCoursePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
