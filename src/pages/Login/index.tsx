import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from 'react-native-root-toast';

import logo from "@/assets/logo.png";
import { Input } from "@/components/Input";

import { Title } from "@/components/Title";
import loginSchema from "@/schemas/loginSchema";
import { KeyboardAvoidingView, Logo, View } from "./styles";
import { Button } from "@/components/Button";
import { LoginForm } from "@/types/forms";
import * as authService from "@/services/authService";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "@/components/SafeAreaView";
import { useStore } from "@/store";

export const Login: React.FC<Omit<NativeStackHeaderProps, "options">> = ({ navigation }) => {
  const {
    login,
    loadingStart,
    loadingEnd,
  } = useStore();

  const {
    control,
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver<LoginForm>(loginSchema),
    defaultValues: {
      email: 'digpoint@gmail.com',
      password: '123456'
    },
    mode: "all"
  });

  const onSubmit = async (_data: LoginForm) => {
    loadingStart();

    try {

      const {data: {company, token}} = await authService.login(_data.email, _data.password);

      Toast.show('Success!');

      login({
        id: company.id,
        name: company.name,
        email: company.email,
        token,
      });
    } catch (e) {
      console.warn(e);
      Toast.show('Invalid credentials!');
    }

    loadingEnd();
  };

  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
      <View>
        <Logo source={logo} />

        <Title
          marginTop={56}
          marginBottom={48}
        >
          LOGIN ADMINISTRADOR
        </Title>

        <Input
          name="email"
          control={control}
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          inputMode="email"
        />

        <Input
          name="password"
          control={control}
          label="Password"
          autoCapitalize="none"
          autoComplete="off"
          secureTextEntry
          inlineImageLeft="Eye"
        />

        <Button
          text="ENTER"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
