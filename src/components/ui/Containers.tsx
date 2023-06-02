import { Container } from "@chakra-ui/react";
import React, { Component, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

class Containers extends Component<ContainerProps> {
  render(): ReactNode {
    const { children } = this.props;
    return <Container maxW="1220px">{children}</Container>;
  }
}

export default Containers;
