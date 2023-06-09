import React, { Component, ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

//local
import { Containers } from "../ui";
import LogoHome from "../header/LogoHome";
import { windowLocation } from "../../utils/helpers/navFunction";

class Footer extends Component {
  render(): React.ReactNode {
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
                  text="+996500032640"
                  link="tel:+996500032640"
                />
                <Contacts
                  icon={<MdMail />}
                  text="course@gmail.com"
                  link="mailto:course@gmail.com"
                />
              </Box>
            </Box>
            <Text fontSize="12px" textAlign="center">
              © {current} Абдыкалык уулу Кабыл-Улан
            </Text>
          </Box>
        </Containers>
      </footer>
    );
  }
}

export default Footer;
