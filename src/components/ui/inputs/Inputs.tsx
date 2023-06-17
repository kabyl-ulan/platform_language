import { Input } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

type InputsComponent = {
  type: string;
  placeholder: string;
  width?: string;
  register?: any;
};

class Inputs extends Component<InputsComponent> {
  render(): ReactNode {
    const { type, placeholder, width, register } = this.props;
    return (
      <Input
        type={type}
        placeholder={placeholder}
        bg="white"
        color="blue"
        w={width}
        {...register}
      />
    );
  }
}

export default Inputs;
