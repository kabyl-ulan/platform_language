import { Box } from "@chakra-ui/react";
import React, { Component, Dispatch, ReactNode, SetStateAction } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

type IEyeInput = {
  eyeIsShow: boolean;
  setEyeIsShow: Dispatch<SetStateAction<boolean>>;
};

class EyeInput extends Component<IEyeInput> {
  render(): ReactNode {
    const { eyeIsShow, setEyeIsShow } = this.props;
    return (
      <Box
        onClick={() => setEyeIsShow(!eyeIsShow)}
        fontSize="30px"
        color="black"
        cursor="pointer"
      >
        {eyeIsShow ? <IoIosEyeOff /> : <IoIosEye />}
      </Box>
    );
  }
}

export default EyeInput;
