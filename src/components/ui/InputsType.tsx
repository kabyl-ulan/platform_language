import { Input } from "@chakra-ui/react";
import { ChangeEvent, Component, ReactNode } from "react";

type InputsComponent = {
  type: string;
  placeholder?: string;
  width?: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

class InputsType extends Component<InputsComponent> {
  render(): ReactNode {
    const { type, placeholder, width, defaultValue, onChange } = this.props;
    return (
      <Input
        type={type}
        placeholder={placeholder}
        bg="white"
        color="blue"
        w={width}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  }
}

export default InputsType;
