import theme from "@/config/theme";
import { ActivityIndicator, Modal } from "react-native";
import { ModalView } from "./styles";
import { useStore } from "@/store";

export const Loading = () => {
  const {
    loading,
  } = useStore();

  return (
    <Modal
      visible={loading}
      transparent
      animationType="slide"
    >
      <ModalView>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </ModalView>
    </Modal>
  );
};
