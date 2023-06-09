import { Button, ButtonProps } from "@chakra-ui/react";
import { Component, ReactElement, ReactNode } from "react";

type BtnComponent = {
  text: string;
  onClick?: () => void;
  rightIcon?: ReactElement;
} & ButtonProps;

class Btn extends Component<BtnComponent> {
  render(): ReactNode {
    const { text, onClick, rightIcon } = this.props;
    return (
      <Button
        type="submit"
        colorScheme="blue"
        bg="#175cb6"
        onClick={onClick}
        rightIcon={rightIcon}
      >
        {text}
      </Button>
    );
  }
}

export default Btn;
