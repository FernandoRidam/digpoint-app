import { TouchableOpacityProps } from "react-native";
import { ButtonView, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  ...rest
}) => {
  return (
    <ButtonView {...rest}>
      <Text>{text}</Text>
    </ButtonView>
  );
};
