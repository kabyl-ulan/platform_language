import { Component, ReactNode } from "react";

//local
import { Containers } from "../components/ui";

class NotFound extends Component {
  render(): ReactNode {
    return (
      <section>
        <Containers>
          <h1 style={{ textAlign: "center", fontSize: "28px" }}>Not Found</h1>
        </Containers>
      </section>
    );
  }
}

export default NotFound;
