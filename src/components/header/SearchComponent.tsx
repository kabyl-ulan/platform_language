import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

//local
import { Modals } from "../ui";
import { SearchInput } from "../forms";

interface ISearchComponentState {
  isOpen: boolean;
}

class SearchComponent extends Component<{}, ISearchComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <Box
          cursor="pointer"
          onClick={this.openModal}
          fontSize="28px"
          p="5px"
          mx="5px"
        >
          <ImSearch />
        </Box>
        <Modals
          isOpen={isOpen}
          onClose={this.closeModal}
          children={<SearchInput />}
        />
      </>
    );
  }
}

export default SearchComponent;
