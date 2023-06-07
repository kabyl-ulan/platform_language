import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const RoutesRender = () => {
  return (
    <Routes>
      <Route>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default RoutesRender;
