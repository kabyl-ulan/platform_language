import { Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface ITextError {
  message: string | undefined;
}
const TextError: FC<ITextError> = ({ message }) => {
  return (
    <Text fontSize="12px" fontWeight="600" color="red.500">
      {message}
    </Text>
  );
};

export default TextError;
