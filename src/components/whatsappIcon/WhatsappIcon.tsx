import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

//local
import "./style.scss";
import {
  whatsappMessage,
  whatsappNumber,
} from "../../utils/constans/messengers";
import { windowOpen } from "../../utils/helpers/navFunction";

const WhatsappIcon: FC = () => {
  const location = useLocation();

  if (location.pathname.includes("admin")) {
    return null;
  }

  return (
    <Box
      w={{ base: "45px", sm: "55px" }}
      h={{ base: "45px", sm: "55px" }}
      position="fixed"
      bottom={{ base: "2rem ", md: "5rem" }}
      right={{ base: "2rem", lg: "4rem" }}
      zIndex="25"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        cursor="pointer"
        alignItems="center"
        borderRadius="100%"
        background="#ffffff"
        position="relative"
        fontSize={{ base: "35px", sm: "40px" }}
        className="pulse"
        color="#25D366"
        onClick={() => {
          windowOpen(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`);
        }}
      >
        <IoLogoWhatsapp />
      </Box>
    </Box>
  );
};

export default WhatsappIcon;
