import { View, StyleSheet } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { AppText } from './AppText';
export function Badge({ label, tone = 'blue' }: { label: string; tone?: 'blue' | 'yellow' | 'neutral' }) {
  return <View style={[styles.base, { backgroundColor: tone === 'yellow' ? colors.accent : tone === 'blue' ? colors.primary : colors.input }]}>
    <AppText variant="caption" weight="semibold" color={tone === 'blue' ? colors.onBrand : colors.primary}>{label}</AppText>
  </View>;
}
const styles = StyleSheet.create({ base: { alignSelf: 'flex-start', borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: spacing.sm } });
