import styled from "styled-components/native";

export const Title = styled.Text<{
  marginTop?: number;
  marginBottom?: number;
}>`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto_700Bold';
  color: ${({ theme }) => theme.colors.primary_light};
  margin-top: ${({ marginTop = 0}) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0}) => marginBottom}px;
`;
