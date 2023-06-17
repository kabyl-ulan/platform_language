import { Td, Tr } from "@chakra-ui/react";
import React, { FC } from "react";

//local
import { BtnChange, BtnDelete } from "../ui";
import { IUsers } from "../../redux/users/interfaces";

type IUserCard = {
  user: IUsers;
};

const UsersTableCard: FC<IUserCard> = ({ user }) => {
  return (
    <Tr>
      <Td>{user.id}</Td>
      <Td>{user.fullName}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phoneNumber}</Td>
      <Td>{user.role}</Td>
      <Td>
        <BtnChange />
      </Td>
      <Td>
        <BtnDelete />
      </Td>
    </Tr>
  );
};

export default UsersTableCard;
