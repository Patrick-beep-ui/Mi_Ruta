import { useState } from 'react';
import { TextInput, View, StyleSheet, type TextInputProps } from 'react-native';
import { colors, fontFamilies, metrics, radii, spacing } from '../../theme/tokens';
import { useBrandFonts } from '../../theme/DesignSystemProvider';
import { AppText } from './AppText';
import { AppIcon, type IconComponent } from './AppIcon';

type Props = Omit<TextInputProps, 'style'> & { label: string; icon?: IconComponent; error?: string; hint?: string };
export function TextField({ label, icon, error, hint, onFocus, onBlur, editable = true, ...props }: Props) {
  const [focused, setFocused] = useState(false);
  const fontsReady = useBrandFonts();
  return <View style={styles.group}>
    <AppText variant="label" weight="medium">{label}</AppText>
    <View style={[styles.container, focused && styles.focused, !!error && styles.error]}>
      {icon ? <AppIcon icon={icon} size={22} /> : null}
      <TextInput {...props} editable={editable} accessibilityLabel={props.accessibilityLabel ?? label}
        accessibilityHint={error ?? hint ?? props.accessibilityHint} placeholderTextColor={colors.textSecondary}
        onFocus={(event) => { setFocused(true); onFocus?.(event); }}
        onBlur={(event) => { setFocused(false); onBlur?.(event); }}
        style={[styles.input, fontsReady && { fontFamily: fontFamilies.regular }]} />
    </View>
    {error || hint ? <AppText variant="caption" color={error ? colors.destination : colors.textSecondary} accessibilityLiveRegion={error ? 'polite' : 'none'}>{error ?? hint}</AppText> : null}
  </View>;
}
const styles = StyleSheet.create({
  group: { gap: spacing.sm },
  container: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.input, borderRadius: radii.card, borderWidth: 2, borderColor: 'transparent', paddingHorizontal: spacing.lg },
  input: { flex: 1, minWidth: 0, minHeight: metrics.fieldHeight, paddingVertical: spacing.md, color: colors.text, fontSize: 14, lineHeight: 20 },
  focused: { borderColor: colors.accent }, error: { borderColor: colors.destination },
});
