import styled from "styled-components/native";

export const ModalView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.background}F2;
`;

export const SafeAreaView = styled.SafeAreaView`
  width: 100%;
  /* height: 322px; */
  border-radius: 24px 24px 0px 0px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.primary};
`;

export const View = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 32px;
  padding-top: 64px;
  border-radius: 24px 24px 0px 0px;
`;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: .6,
})`
  position: absolute;
  top: 16px;
  right: 24px;
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 24px;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.primary_light};
  margin-bottom: 24px;
`;
