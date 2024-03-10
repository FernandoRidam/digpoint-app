import styled from "styled-components/native";

export const View = styled.View`
  flex-direction: column;
  width: 100%;
  max-width: 326px;
  margin-bottom: 24px;
`;

export const Label = styled.Text<{
  error?: boolean;
  focus?: boolean;
}>`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
  font-family: 'Roboto_700Bold';
  color: ${({ theme, focus, error = false }) =>
    error && !focus
      ? theme.colors.danger
      : theme.colors.primary_light
  };
`;

export const InputView = styled.View<{
  error?: boolean;
  focus?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 52px;
  border: 1px solid ${({ theme, focus, error = false }) =>
    error && !focus
      ? theme.colors.danger
      : theme.colors.primary_light
  };
  border-radius: 8px;
`;

export const TextInput = styled.TextInput<{
  error?: boolean;
  focus?: boolean;
}>`
  flex: 1;
  color: ${({ theme, focus, error = false }) =>
    error && !focus
      ? theme.colors.danger
      : theme.colors.primary_light
  };
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto_700Bold';
`;

export const Action = styled.TouchableOpacity.attrs({
  activeOpacity: .6,
})`
  padding: 0 16px 0 8px;
`;

export const Error = styled.Text`
  font-weight: 300;
  font-family: 'Roboto_300Light';
  font-size: 12px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.danger};
`;
