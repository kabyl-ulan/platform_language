import React, { useState } from "react";

import {
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

//local
import { setLocalStorage } from "../../utils/helpers/localStorage";
import { KEY_TOKEN } from "../../utils/constans/key";
import { PUBLIC_API } from "../../api/api";
import { Btn, Containers, EyeInput, Inputs } from "../ui";

type InputsLogin = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();

  const [eye, setEye] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<InputsLogin> = async (user) => {
    try {
      setLoading(true);
      const { data } = await PUBLIC_API.post("user/login", { ...user });
      alert(JSON.stringify(data, null, 2));
      data?.token && setLocalStorage(KEY_TOKEN, data?.token);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
    }
  };
  return (
    <section>
      <Containers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            maxW="500px"
            mx="auto"
            h="70vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Text textAlign="center" fontSize="30px">
                Авторизация
              </Text>
              <FormLabel>
                Электронная почта*
                <Inputs
                  register={register("email", { required: true })}
                  type="email"
                  placeholder="email"
                />
              </FormLabel>
              <FormLabel>
                Пароль*
                <InputGroup>
                  <Inputs
                    register={register("password", { required: true })}
                    type={eye ? "text" : "password"}
                    placeholder="password"
                  />
                  <InputRightElement w="3rem">
                    <EyeInput eyeIsShow={eye} setEyeIsShow={setEye} />
                  </InputRightElement>
                </InputGroup>
              </FormLabel>
              <Box display="flex" justifyContent="center">
                <Btn text="Войти" isLoading={loading} />
              </Box>
            </Box>
          </Box>
        </form>
      </Containers>
    </section>
  );
};

export default LoginForm;
