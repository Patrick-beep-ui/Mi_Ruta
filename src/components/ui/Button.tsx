import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import { colors, metrics, radii, spacing } from '../../theme/tokens';
import { AppIcon, type IconComponent } from './AppIcon';
import { AppText } from './AppText';

type Props = Omit<PressableProps, 'children' | 'style'> & {
  label: string; variant?: 'primary' | 'secondary' | 'soft'; icon?: IconComponent;
  loading?: boolean; style?: StyleProp<ViewStyle>;
};
export function Button({ label, variant = 'primary', icon, disabled, loading = false, style, onFocus, onBlur, onPress, ...props }: Props) {
  const [focused, setFocused] = useState(false);
  const inactive = disabled || loading || !onPress;
  return (
    <Pressable {...props} accessibilityRole="button" accessibilityState={{ disabled: inactive, busy: loading }}
      disabled={inactive} onPress={onPress}
      onFocus={(event) => { setFocused(true); onFocus?.(event); }}
      onBlur={(event) => { setFocused(false); onBlur?.(event); }}
      style={({ pressed }) => [styles.base, styles[variant], pressed && (variant === 'primary' ? styles.primaryPressed : styles.otherPressed), focused && styles.focused, inactive && styles.disabled, style]}>
      {({ pressed }) => {
        const color = inactive ? colors.disabledText : pressed && variant !== 'primary' ? colors.onBrand : colors.primary;
        return <>
          {loading ? <ActivityIndicator color={color} /> : icon ? <AppIcon icon={icon} size={20} color={color} /> : null}
          <AppText variant="label" weight="semibold" color={color} style={styles.label}>{label}</AppText>
        </>;
      }}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  base: { minHeight: metrics.buttonHeight, borderRadius: radii.pill, paddingVertical: spacing.md, paddingHorizontal: spacing.xl, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, borderWidth: 1, borderColor: 'transparent' },
  label: { flexShrink: 1, textAlign: 'center' },
  primary: { backgroundColor: colors.accent },
  secondary: { backgroundColor: colors.surface, borderColor: colors.primary },
  soft: { backgroundColor: colors.input, borderColor: colors.border },
  primaryPressed: { backgroundColor: colors.accentPressed },
  otherPressed: { backgroundColor: colors.primaryPressed },
  focused: { borderWidth: 2, borderColor: colors.primary },
  disabled: { backgroundColor: colors.disabled, borderColor: colors.disabled },
});
