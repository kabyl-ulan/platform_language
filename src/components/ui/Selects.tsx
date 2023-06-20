import { Select } from "@chakra-ui/react";
import React, { Component, ReactNode } from "react";

type ISelectsComponent = {
  placeholder?: string;
  arr: any[];
  defaultValue?: number | string;
  onChange?: any;
};

class Selects extends Component<ISelectsComponent> {
  render(): ReactNode {
    const { placeholder, arr, defaultValue, onChange } = this.props;
    return (
      <>
        <Select
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          cursor="pointer"
          minW="200px"
          w={300}
          my="4px"
        >
          {arr.map((el, idx) => (
            <option key={idx} value={el.id} style={{ color: "#000000" }}>
              {el.categoryName}
            </option>
          ))}
        </Select>
      </>
    );
  }
}

export default Selects;
