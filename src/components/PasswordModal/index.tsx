import { Modal } from "react-native";
import { CloseButton, ModalView, SafeAreaView, Text, View } from "./styles";
import Toast from 'react-native-root-toast';
import { XCircle } from "phosphor-react-native";
import theme from "@/config/theme";
import { useForm } from "react-hook-form";
import { ConfirmExitForm } from "@/types/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as authService from "@/services/authService";
import confirmExitSchema from "@/schemas/confirmExitSchema";
import { Input } from "../Input";
import { Button } from "../Button";
import { useStore } from "@/store";

export const PasswordModal = () => {
  const {
    user,
    confirmExit,
    loadingStart,
    loadingEnd,
    logout,
  } = useStore();

  const {
    control,
    handleSubmit,
  } = useForm<ConfirmExitForm>({
    resolver: yupResolver<ConfirmExitForm>(confirmExitSchema),
    defaultValues: {
      password: '123456'
    },
    mode: "all"
  });

  const onSubmit = async (_data: ConfirmExitForm) => {
    try {
      const {data} = await authService.login(user?.email ?? "", _data.password);

      Toast.show('Success!');

      if(data) {
        confirmExit.close();

        logout();
      }
    } catch (e) {
      Toast.show('Invalid credentials!');
    }
  };

  return (
    <Modal
      visible={confirmExit.show}
      transparent
      animationType="slide"
    >
      <ModalView>
        <SafeAreaView>
          <View>
            <CloseButton onPress={confirmExit.close}>
              <XCircle color={theme.colors.primary_light}/>
            </CloseButton>

            <Text>CONFIRM EXIT</Text>

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
      </ModalView>
    </Modal>
  );
};
