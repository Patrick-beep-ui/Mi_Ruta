import { Text, type TextProps } from 'react-native';
import { useBrandFonts } from '../../theme/DesignSystemProvider';
import { colors, fontFamilies, typeScale, type FontWeight, type TextVariant } from '../../theme/tokens';

type Props = TextProps & { variant?: TextVariant; weight?: FontWeight; color?: string };
const fallbackWeights = { regular: '400', medium: '500', semibold: '600', bold: '700' } as const;
export function AppText({ variant = 'body', weight, color = colors.text, style, ...props }: Props) {
  const ready = useBrandFonts();
  const spec = typeScale[variant];
  const resolvedWeight = weight ?? spec.weight;
  return <Text {...props} style={[
    { fontSize: spec.fontSize, lineHeight: spec.lineHeight, color },
    ready ? { fontFamily: fontFamilies[resolvedWeight] } : { fontWeight: fallbackWeights[resolvedWeight] },
    style,
  ]} />;
}
