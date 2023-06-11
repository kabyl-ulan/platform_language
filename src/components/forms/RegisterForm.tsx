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
import { Btn, Containers, EyeInput, Inputs, LoginOrRegister } from "../ui";

type InputsRegister = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password1: string;
  password2: string;
  patronymic: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegister>();

  const [eye, setEye] = useState<boolean>(false);
  const [eyeConfirm, setEyeConfirm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<InputsRegister> = async (user) => {
    try {
      setLoading(true);
      const { data } = await PUBLIC_API.post("user/register", { ...user });
      console.log(data);
      data?.token && setLocalStorage(KEY_TOKEN, data?.token);
      setLoading(false);
    } catch (e: any) {
      console.log(e);
      setLoading(false);
    }
  };

  const renderInputField = (
    name: string,
    fieldName: keyof InputsRegister,
    type: string,
    placeholder: string,
    required = true
  ) => (
    <FormLabel>
      {name}
      <Inputs
        register={register(fieldName, { required })}
        type={type}
        placeholder={placeholder}
      />
    </FormLabel>
  );

  return (
    <section>
      <Containers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box maxW="500px" mx="auto" py="25px">
            <Text textAlign="center" fontSize="30px">
              Регистрация
            </Text>
            {renderInputField("Имя*", "name", "text", "name")}
            {renderInputField("Фамилия*", "surname", "text", "surname")}
            {renderInputField(
              "Отчество",
              "patronymic",
              "text",
              "patronymic",
              false
            )}
            {renderInputField("Электронная почта*", "email", "email", "email")}
            {renderInputField("Телефон", "phoneNumber", "text", "phone", false)}
            <FormLabel>
              Пароль*
              <InputGroup>
                <Inputs
                  register={register("password1", { required: true })}
                  type={eye ? "text" : "password"}
                  placeholder="password"
                />
                <InputRightElement w="3rem">
                  <EyeInput eyeIsShow={eye} setEyeIsShow={setEye} />
                </InputRightElement>
              </InputGroup>
            </FormLabel>
            <FormLabel>
              Подтвердить пароль*
              <InputGroup>
                <Inputs
                  register={register("password2", { required: true })}
                  type={eyeConfirm ? "text" : "password"}
                  placeholder="confirm password"
                />
                <InputRightElement w="3rem">
                  <EyeInput
                    eyeIsShow={eyeConfirm}
                    setEyeIsShow={setEyeConfirm}
                  />
                </InputRightElement>
              </InputGroup>
            </FormLabel>
            <Box display="flex" justifyContent="center">
              <Btn text="Регистрация" isLoading={loading} />
            </Box>
            <LoginOrRegister
              quation="У есть аккаунт?"
              text="Авторизоваться"
              navigate={"/login"}
            />
          </Box>
        </form>
      </Containers>
    </section>
  );
};

export default RegisterForm;
