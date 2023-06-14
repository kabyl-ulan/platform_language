import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import { AdminComponent } from "../components";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Btn, Containers } from "../components/ui";

const AdminCategoriesPage = () => {
  const Categories = () => {
    return (
      <Containers>
        <Box display="flex" justifyContent="flex-end">
          <Btn text="Добавить" />
        </Box>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th color="#ffffff">№</Th>
                <Th color="#ffffff">Название</Th>
                <Th color="#ffffff">Изменение</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Английский язык</Td>
                <Td>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    w="300px"
                  >
                    <Btn
                      text="Изменить"
                      bg="orange.500"
                      rightIcon={<HiOutlinePencilSquare />}
                    />
                    <Btn
                      text="Удалить"
                      bg="red"
                      rightIcon={<AiOutlineDelete />}
                    />
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Русский язык</Td>
                <Td>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    w="300px"
                  >
                    <Btn
                      text="Изменить"
                      bg="orange.500"
                      rightIcon={<HiOutlinePencilSquare />}
                    />
                    <Btn
                      text="Удалить"
                      bg="red"
                      rightIcon={<AiOutlineDelete />}
                    />
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Containers>
    );
  };
  return (
    <>
      <AdminComponent children={<Categories />} />
    </>
  );
};

export default AdminCategoriesPage;
