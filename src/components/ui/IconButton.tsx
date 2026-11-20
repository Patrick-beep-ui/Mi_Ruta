import { Pressable, StyleSheet } from 'react-native';
import { colors, metrics, radii } from '../../theme/tokens';
import { AppIcon, type IconComponent } from './AppIcon';
export function IconButton({ icon, label, onPress, inverse = false }: { icon: IconComponent; label: string; onPress: () => void; inverse?: boolean }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress}
    style={({ pressed }) => [styles.button, pressed && { backgroundColor: inverse ? colors.primaryPressed : colors.input }]}>
    <AppIcon icon={icon} color={inverse ? colors.onBrand : colors.primary} />
  </Pressable>;
}
const styles = StyleSheet.create({ button: { minWidth: metrics.touchTarget, minHeight: metrics.touchTarget, borderRadius: radii.small, alignItems: 'center', justifyContent: 'center' } });
