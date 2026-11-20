import { StyleSheet } from 'react-native';
import { spacing } from '../theme/tokens';
export const headingStyles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  title: { flex: 1, flexShrink: 1 },
});
