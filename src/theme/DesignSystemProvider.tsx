import { createContext, useContext, type PropsWithChildren } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { colors, fontFamilies, spacing } from './tokens';

const FontContext = createContext(false);
const fonts = {
  [fontFamilies.regular]: require('../../assets/fonts/Inter-Regular.ttf'),
  [fontFamilies.medium]: require('../../assets/fonts/Inter-Medium.ttf'),
  [fontFamilies.semibold]: require('../../assets/fonts/Inter-SemiBold.ttf'),
  [fontFamilies.bold]: require('../../assets/fonts/Inter-Bold.ttf'),
};

export function DesignSystemProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts(fonts);
  if (!loaded && !error) {
    return (
      <View style={styles.loading} accessibilityLabel="Preparando Mi Ruta" accessibilityRole="progressbar">
        <ActivityIndicator color={colors.accent} size="large" />
        <Text style={styles.message}>Preparando Mi Ruta</Text>
      </View>
    );
  }
  // Keep the application usable with system fonts if a local font fails to load.
  return <FontContext.Provider value={loaded}>{children}</FontContext.Provider>;
}

export const useBrandFonts = () => useContext(FontContext);
const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.lg, backgroundColor: colors.primary },
  message: { color: colors.onBrand, fontSize: 16 },
});
