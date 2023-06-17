import { Button } from "@chakra-ui/react";
import { Component, ReactNode } from "react";
import { BtnComponent } from "./interface";

class Btn extends Component<BtnComponent> {
  render(): ReactNode {
    const { text, onClick, rightIcon, isLoading, p, bg } = this.props;
    return (
      <Button
        isLoading={isLoading}
        type="submit"
        colorScheme="blue"
        bg={bg ? bg : "#175cb6"}
        onClick={onClick}
        rightIcon={rightIcon}
        p={p}
      >
        {text}
      </Button>
    );
  }
}

export default Btn;
