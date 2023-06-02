import { Input } from "@chakra-ui/react";
import React, { Component } from "react";

class SearchInput extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <Input type="search" placeholder="Поиск..." />
      </div>
    );
  }
}

export default SearchInput;
