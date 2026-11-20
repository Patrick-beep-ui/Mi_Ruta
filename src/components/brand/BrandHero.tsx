import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { BrandLogo } from './BrandLogo';
import { AppText } from '../ui/AppText';
import { colors, radii, spacing } from '../../theme/tokens';
export function BrandHero({ title, description }: { title: string; description: string }) {
  return <LinearGradient colors={[colors.primary, colors.gradientEnd]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
    <BrandLogo size={96} />
    <AppText variant="title" color={colors.onBrand} style={styles.text}>{title}</AppText>
    <AppText color={colors.onBrand} style={styles.text}>{description}</AppText>
  </LinearGradient>;
}
const styles = StyleSheet.create({ hero: { padding: spacing.xl, borderRadius: radii.panel, gap: spacing.lg, alignItems: 'center' }, text: { textAlign: 'center' } });
