import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

//local
import { Containers } from "../ui";
import LogoHome from "../header/LogoHome";

class Footer extends Component {
  render(): React.ReactNode {
    const currentDate = new Date();
    const current = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
    });
    return (
      <footer>
        <Containers>
          <Box borderTop="1px" py="8px">
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
                <Box display="flex" alignItems="center" ml="30px">
                  <BsTelephoneFill />
                  <Text ml="10px">+996500032640</Text>
                </Box>
                <Box display="flex" alignItems="center" ml="30px">
                  <MdMail />
                  <Text ml="10px">course@gmail.com</Text>
                </Box>
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
