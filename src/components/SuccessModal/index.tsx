import { Modal } from "react-native";
import { Logo, ModalView, Text, View } from "./styles";
import { useStore } from "@/store";

import logo from "@/assets/140x108.png";

export const SuccessModal = () => {
  const {
    pointSuccessfully,
  } = useStore();

  return (
    <Modal
      visible={pointSuccessfully.name !== ""}
      transparent
      animationType="slide"
    >
      <ModalView>
        <View>
          <Logo source={logo} />

          <Text>HELLO {pointSuccessfully.name}!</Text>
          <Text>POINT SUCCESSFULLY REGISTERED!</Text>
        </View>
      </ModalView>
    </Modal>
  );
};
