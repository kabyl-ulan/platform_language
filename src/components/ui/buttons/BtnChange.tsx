import React, { Component, ReactNode } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

//local
import { BtnOther } from "./interface";
import Btn from "./Btn";

class BtnChange extends Component<BtnOther> {
  render(): ReactNode {
    const { onClick } = this.props;
    return (
      <Btn
        text="Изменить"
        bg="yellow.500"
        rightIcon={<HiOutlinePencilSquare />}
        onClick={onClick}
      />
    );
  }
}

export default BtnChange;
