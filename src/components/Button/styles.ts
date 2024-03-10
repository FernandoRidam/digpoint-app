import styled from "styled-components/native";

export const ButtonView = styled.TouchableOpacity.attrs({
  activeOpacity: .8,
})`
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 326px;
  height: 52px;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.gray200
      : theme.colors.primary_light
  };
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 24px;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.white};
`;
