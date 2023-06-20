import React, { FC } from "react";

//local
import ImageDef from "../../assets/img/DefaultImage.png";
import Images from "./Images";

type DefaultImageComponent = {
  w?: string;
};

const DefaultImage: FC<DefaultImageComponent> = ({ w }) => {
  return <Images source={ImageDef} alt="DefaultImage" width={w} />;
};

export default DefaultImage;
