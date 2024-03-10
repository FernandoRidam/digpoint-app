import { Platform } from "react-native";
import styled from "styled-components/native";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height'
})`
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
  align-items: center;
  padding: 86px 32px 0 32px;
`;

export const Logo = styled.Image`
  margin-bottom: 56px;
`;
