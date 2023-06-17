import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Thead,
} from "@chakra-ui/react";
import React, { Component, ReactNode } from "react";

type TablesProps = {
  thead: ReactNode;
  tbody: ReactNode;
  tcaption?: string;
};

class Tables extends Component<TablesProps> {
  render(): ReactNode {
    const { tbody, thead, tcaption } = this.props;
    return (
      <TableContainer>
        <Table>
          {tcaption && <TableCaption>{tcaption}</TableCaption>}
          <Thead>{thead}</Thead>
          <Tbody>{tbody}</Tbody>
        </Table>
      </TableContainer>
    );
  }
}

export default Tables;
