import { Container } from "@chakra-ui/react";
import React, { Component, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

class Containers extends Component<ContainerProps> {
  render(): ReactNode {
    const { children } = this.props;
    return (
      <Container
        maxW={{
          base: "100%",
          md: "95%",
          lg: "90%",
          xl: "1220px",
          "2xl": "1360px",
        }}
        mx="auto"
      >
        {children}
      </Container>
    );
  }
}

export default Containers;
