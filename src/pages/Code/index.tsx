import { SafeAreaView } from "@/components/SafeAreaView";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import Toast from 'react-native-root-toast';
import { View } from "./styles";
import { NumberKeyboard } from "@/components/NumberKeyboard";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { CodeForm } from "@/types/forms";
import codeSchema from "@/schemas/codeSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { code } from "@/services/codeService";
import { useStore } from "@/store";

export const Code: React.FC<Omit<NativeStackHeaderProps, "options">> = ({ navigation }) => {
  const {
    user,
    loadingStart,
    loadingEnd,
    pointSuccessfully,
  } = useStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: {
      isValid,
    }
  } = useForm<CodeForm>({
    resolver: yupResolver<CodeForm>(codeSchema),
    defaultValues: {
      code: "",
    },
    mode: "all"
  });

  const onSubmit = async (_data: CodeForm) => {
    try {
      loadingStart();

      const {data: {name}} = await code(user?.token ?? "", user?.id ?? "", _data.code);

      Toast.show('Success!');

      loadingEnd();

      setTimeout(() => {
        pointSuccessfully.open(name, 5);
        reset();
      }, 400);
    } catch (error) {
      Toast.show('Emplyee not found!');

      reset();

      loadingEnd();
    }
  };

  return (
    <SafeAreaView>
      <View>
        <NumberKeyboard
          control={control}
          name="code"
        />

        <Button
          text="REGISTER POINT"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </SafeAreaView>
  );
};
