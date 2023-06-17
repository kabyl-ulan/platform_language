import React, { Component, ReactNode } from "react";
import { AiOutlineDelete } from "react-icons/ai";

//local
import { BtnOther } from "./interface";
import Btn from "./Btn";

class BtnDelete extends Component<BtnOther> {
  render(): ReactNode {
    const { onClick } = this.props;
    return (
      <Btn
        text="Удалить"
        bg="red.500"
        rightIcon={<AiOutlineDelete />}
        onClick={onClick}
      />
    );
  }
}

export default BtnDelete;
