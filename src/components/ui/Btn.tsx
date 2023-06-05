import { Button } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

type BtnComponent = {
  text: string;
  onClick?: () => void;
};

class Btn extends Component<BtnComponent> {
  render(): ReactNode {
    const { text, onClick } = this.props;
    return (
      <Button type="submit" colorScheme="blue" bg="#175cb6" onClick={onClick}>
        {text}
      </Button>
    );
  }
}

export default Btn;
