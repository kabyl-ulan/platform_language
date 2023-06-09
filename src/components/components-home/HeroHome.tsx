import { Component, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

//local
import { Containers } from "../ui";

class HeroHome extends Component {
  render(): ReactNode {
    return (
      <section>
        <Containers>
          <Box py="20px" minH="80vh" display="flex" alignItems="center">
            <Box>
              <Text fontSize="30px">Начните расширять свои навыки</Text>
              <Text maxW={{ md: "70%", lg: "60%" }} mt="20px">
                Учите новые навыки, расширяйте знания и достигайте успеха с
                нашими онлайн курсами. Получите доступ к качественному обучению
                от ведущих экспертов в удобном формате.
              </Text>
            </Box>
          </Box>
        </Containers>
      </section>
    );
  }
}

export default HeroHome;
