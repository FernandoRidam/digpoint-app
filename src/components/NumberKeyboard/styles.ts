import styled from "styled-components/native";

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  max-width: 326px;
  max-height: 448px;
`;

export const CodeView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 72px;
  padding: 0 56px;
  margin-bottom: 32px;
  border: 4px solid ${({ theme }) => theme.colors.primary_light};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 32px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: .6,
})`
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border: 4px solid ${({ theme }) => theme.colors.primary_light};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.Text`
  font-size: 56px;
  font-weight: 700;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const CodeText = styled.Text`
  font-size: 56px;
  font-weight: 700;
  width: 33px;
  height: 100%;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.primary_light};
  margin: 0 16px;
`;
