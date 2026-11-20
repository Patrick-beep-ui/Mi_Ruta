import { DefaultTheme, type Theme } from '@react-navigation/native';
import { colors, fontFamilies } from './tokens';

export function getNavigationTheme(fontsReady: boolean): Theme {
  return {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: colors.primary, background: colors.background, card: colors.surface, text: colors.text, border: colors.border, notification: colors.destination },
    fonts: fontsReady ? {
      regular: { fontFamily: fontFamilies.regular, fontWeight: '400' },
      medium: { fontFamily: fontFamilies.medium, fontWeight: '500' },
      bold: { fontFamily: fontFamilies.bold, fontWeight: '700' },
      heavy: { fontFamily: fontFamilies.bold, fontWeight: '700' },
    } : DefaultTheme.fonts,
  };
}
