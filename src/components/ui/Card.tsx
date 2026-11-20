import { View, StyleSheet, type ViewProps } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
export function Card({ children, style, tone = 'surface', ...props }: ViewProps & { tone?: 'surface' | 'favorite' | 'subtle' }) {
  return <View {...props} style={[styles.base, { backgroundColor: tone === 'favorite' ? colors.favorite : tone === 'subtle' ? colors.input : colors.surface }, style]}>{children}</View>;
}
const styles = StyleSheet.create({ base: { borderRadius: radii.card, padding: spacing.lg, gap: spacing.md } });
