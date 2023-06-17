import React, { Component, ReactNode } from "react";
import { IoMdAdd } from "react-icons/io";

//local
import Btn from "./Btn";
import { BtnOther } from "./interface";

class BtnAdd extends Component<BtnOther> {
  render(): ReactNode {
    const { onClick } = this.props;
    return <Btn text="Добавить" rightIcon={<IoMdAdd />} onClick={onClick} />;
  }
}

export default BtnAdd;
