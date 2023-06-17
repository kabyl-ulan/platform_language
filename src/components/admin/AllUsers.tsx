import React, { FC, useEffect } from "react";
import { Th, Tr } from "@chakra-ui/react";

//local
import { useUsers } from "../../redux/users/hooks";
import { getUsers } from "../../redux/users/action";
import { useAppDispatch } from "../../redux/store";
import { BtnAdd, Containers, Tables } from "../ui";
import { UsersTableCard } from "../cards";

const AllUsers: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, users, error } = useUsers();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!!error.length) {
    return <>{error}</>;
  }

  return (
    <>
      <Containers>
        <Tables
          thead={
            <Tr>
              <Th>№(id)</Th>
              <Th>Ф.И.О.</Th>
              <Th>Электронная почта</Th>
              <Th>Номер</Th>
              <Th colSpan={2}>Роль</Th>
              <Th>
                <BtnAdd />
              </Th>
            </Tr>
          }
          tbody={users.map((user) => (
            <UsersTableCard key={user.id} user={user} />
          ))}
          tcaption={users.length === 0 ? "Пользователей нет" : ""}
        />
      </Containers>
    </>
  );
};

export default AllUsers;
