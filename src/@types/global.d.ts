import 'styled-components/native';
import theme from "../config/theme";

type CustomTheme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}

import type { SvgProps as DefaultSvgProps } from 'react-native-svg';

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string;
  }
}

declare module "*.png" {
  const content: ImageSourcePropType;
  export default content;
}
