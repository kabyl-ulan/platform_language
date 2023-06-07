import { Component, ReactNode } from "react";

//local
import RoutesRender from "./routes/routes-render";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <RoutesRender />
      </>
    );
  }
}

export default App;
