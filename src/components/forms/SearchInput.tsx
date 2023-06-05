import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

//local
import { InputsType } from "../ui";

const SearchInput: FC = () => {
  const [searchCourse, setSearchCourse] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCourse(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (searchCourse.length) {
      navigate(`/search-result/${searchCourse}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputsType
          type="search"
          placeholder="Поиск..."
          defaultValue={searchCourse}
          onChange={handleChange}
        />
        <InputRightElement>
          <Box
            w="3rem"
            h="80%"
            bg="white"
            display="flex"
            color="black"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            fontSize="26px"
          >
            <ImSearch />
          </Box>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
