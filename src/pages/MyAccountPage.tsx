import React from "react";
import { Box, Text } from "@chakra-ui/react";

//local
import { Btn, Containers } from "../components/ui";
import { getLocalStorage } from "../utils/helpers/localStorage";
import { useNavigate } from "react-router-dom";
import { windowLocation } from "../utils/helpers/navFunction";

const MyAccountPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Containers>
        <Box pt="15px">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text fontWeight="600" mr="6px">
              Аккаунт:
            </Text>
            <Text>{getLocalStorage("gmail") || ""}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH="60vh"
            flexDirection="column"
          >
            <Btn
              text="Мои курсы"
              p="2rem 4rem"
              onClick={() => navigate("/my-courses")}
            />
            <Box pt="2rem">
              <Btn
                text="Выйти"
                bg="orange.500"
                onClick={() => {
                  localStorage.clear();
                  windowLocation("/");
                }}
              />
            </Box>
          </Box>
        </Box>
      </Containers>
    </section>
  );
};

export default MyAccountPage;
