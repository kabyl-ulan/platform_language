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
import { Btn, Containers, Inputs } from "../ui";
import EyeInput from "../ui/EyeInput";

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

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <section>
      <Containers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box maxW="500px" mx="auto">
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
              <Btn text="Войти" />
            </Box>
          </Box>
        </form>
      </Containers>
    </section>
  );
};

export default LoginForm;
