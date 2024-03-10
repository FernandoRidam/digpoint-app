import theme from "@/config/theme";
import { useStore } from "@/store";
import { SignOut } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const LogoutButton = () => {
  const {
    confirmExit,
  } = useStore();

  return (
    <TouchableOpacity activeOpacity={.6} onPress={confirmExit.open}>
      <SignOut color={theme.colors.danger} />
    </TouchableOpacity>
  );
};
