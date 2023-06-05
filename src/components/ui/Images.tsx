import { Image } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

type ImagesComponent = {
  source: string;
  alt: string;
  width?: string | any;
  height?: string | any;
  maxWidth?: string | any;
  cursor?: string;
  _hover?: any;
  borderRadius?: string;
};

class Images extends Component<ImagesComponent> {
  render(): ReactNode {
    const {
      source,
      alt,
      width,
      height,
      maxWidth,
      cursor,
      _hover,
      borderRadius,
    } = this.props;
    return (
      <Image
        src={source}
        alt={alt}
        maxWidth={maxWidth}
        width={width}
        height={height}
        transition="transform 0.4s"
        cursor={cursor}
        _hover={_hover}
        borderRadius={borderRadius}
      />
    );
  }
}

export default Images;
