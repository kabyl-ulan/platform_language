import { ButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export type BtnComponent = {
  text: string;
  onClick?: () => void;
  rightIcon?: ReactElement;
  isLoading?: boolean;
  p?: string | any;
  bg?: string;
} & ButtonProps;

export type BtnOther = {
  onClick?: () => void;
} & ButtonProps;
