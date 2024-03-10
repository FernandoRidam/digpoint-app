import styled from "styled-components/native";

export const ModalView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background}F2;
`;

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 64px;
`;

export const Logo = styled.Image`
  margin-bottom: 48px;
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 24px;
  font-family: 'Roboto_700Bold';
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary_light};
`;
