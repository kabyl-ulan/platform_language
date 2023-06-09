import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

//local
import HeroImage from "../../assets/img/HeroImage.png";
import { Containers, Images, Btn } from "../ui";

const HeroHome: FC = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Containers>
        <Box
          py="20px"
          minH="70vh"
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", xs: "row" }}
        >
          <Box w={{ xs: "50%" }}>
            <Text
              fontSize={{ base: "34px", xs: "36px", md: "40px", lg: "50px" }}
              lineHeight={{ base: "100%", xs: "130%" }}
              fontWeight="800"
              textAlign={{ base: "center", xs: "left" }}
            >
              Изучайте курсы из любой точки мира
            </Text>
            <Text
              maxW={{ base: "100%", md: "90%" }}
              mt="20px"
              fontSize={{ base: "16px", sm: "18px" }}
              fontWeight="500"
              textAlign={{ base: "justify" }}
            >
              Учите новые навыки, расширяйте знания и достигайте успеха с нашими
              онлайн курсами. Получите доступ к качественному обучению от
              ведущих экспертов в удобном формате.
            </Text>
            <Box
              mt="15px"
              display="flex"
              justifyContent={{ base: "center", xs: "flex-start" }}
            >
              <Btn
                text="Посмотреть курсы"
                rightIcon={<BsArrowRight />}
                onClick={() => navigate("/all-course")}
              />
            </Box>
          </Box>
          <Box w={{ xs: "50%" }}>
            <Images source={HeroImage} alt="HeroImage" width="100%" />
          </Box>
        </Box>
      </Containers>
    </section>
  );
};

export default HeroHome;
