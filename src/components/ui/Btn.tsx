import { Button } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

type BtnComponent = {
  text: string;
};

class Btn extends Component<BtnComponent> {
  render(): ReactNode {
    const { text } = this.props;
    return (
      <Button type="submit" colorScheme="blue" bg="#175cb6">
        {text}
      </Button>
    );
  }
}

export default Btn;
