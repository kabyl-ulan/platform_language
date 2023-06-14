import React, { FC, ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { useLocation } from "react-router-dom";

//local
import { windowLocation } from "../../utils/helpers/navFunction";
import { Containers } from "../ui";
import LogoHome from "../header/LogoHome";
import { gmail, phoneNumber } from "../../utils/constans/messengers";

const Footer: FC = () => {
  const year = 2023;

  const location = useLocation();

  const currentDate = new Date();
  const current = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const Contacts = ({
    icon,
    text,
    link,
  }: {
    icon: ReactElement;
    text: string;
    link: string;
  }) => {
    return (
      <Box
        display="flex"
        alignItems="center"
        ml="30px"
        p="2px"
        cursor="pointer"
        onClick={() => windowLocation(link)}
      >
        {icon}
        <Text ml="10px">{text}</Text>
      </Box>
    );
  };

  if (location.pathname.includes("admin")) {
    return null;
  }

  return (
    <footer>
      <Containers>
        <Box borderTop="1px" py="12px">
          <Box
            display="flex"
            justifyContent={{ base: "center", xs: "space-between" }}
            flexDirection={{ base: "column", xs: "row" }}
            alignItems="center"
          >
            <LogoHome />
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              fontSize="16px"
            >
              <Contacts
                icon={<BsTelephoneFill />}
                text={phoneNumber}
                link={`tel:${phoneNumber}`}
              />
              <Contacts
                icon={<MdMail />}
                text={gmail}
                link={`mailto:${gmail}`}
              />
            </Box>
          </Box>
          <Text fontSize="12px" textAlign="center">
            ©{" "}
            {Number(year) === Number(current)
              ? year
              : `${year + " - " + current}`}{" "}
            Абдыкалык уулу К.
          </Text>
        </Box>
      </Containers>
    </footer>
  );
};

export default Footer;
