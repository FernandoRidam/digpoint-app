import { TextInputProps } from "react-native";
import { Error, View, Label, InputView, TextInput, Action } from "./styles";
import { Control, useController, UseControllerProps } from "react-hook-form";
import { useState } from "react";
import theme from "@/config/theme";
import { Eye, EyeSlash } from "phosphor-react-native";

type InputProps = {
  name: string;
  control: Control<any>;
  label?: string;
} & TextInputProps;

export const Input: React.FC<InputProps> = ({
  name,
  control,
  label = "",
  ...rest
}) => {
  const { field: { value, onChange }, fieldState: { error }} = useController({
    control,
    name,
  });

  const [ focus, setFocus ] = useState<boolean>(false);
  const [ show, setShow ] = useState<boolean>(Boolean(rest.secureTextEntry));

  return (
    <View>
      <Label focus={focus} error={Boolean(error?.message)}>{label}</Label>

      <InputView
        focus={focus}
        error={Boolean(error?.message)}
      >
        <TextInput
          {...rest}
          value={value}
          onChangeText={onChange}
          placeholder={label}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor={theme.colors.gray200}
          secureTextEntry={show}
        />

        {
          rest.secureTextEntry && (
            <Action onPress={() => setShow((value) => !value)}>
              {
                !show
                  ? (
                      <EyeSlash color={
                        Boolean(error?.message) && !focus
                          ? theme.colors.danger
                          : theme.colors.primary_light
                        }
                      />
                    )
                  : (
                      <Eye color={
                        Boolean(error?.message) && !focus
                          ? theme.colors.danger
                          : theme.colors.primary_light
                        }
                      />
                    )
              }
            </Action>
          )
        }
      </InputView>

      <Error>{error?.message ?? ""}</Error>
    </View>
  );
};
