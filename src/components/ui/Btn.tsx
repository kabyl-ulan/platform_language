import { Button, ButtonProps } from "@chakra-ui/react";
import { Component, ReactElement, ReactNode } from "react";

type BtnComponent = {
  text: string;
  onClick?: () => void;
  rightIcon?: ReactElement;
  isLoading?: boolean;
  p?: string | any;
  bg?: string;
} & ButtonProps;

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
