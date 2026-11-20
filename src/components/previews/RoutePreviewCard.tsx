import { View, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { Card } from '../ui/Card';
import { AppText } from '../ui/AppText';
import { AppIcon } from '../ui/AppIcon';
import { Badge } from '../ui/Badge';
import { colors, spacing } from '../../theme/tokens';
type Props = { number: string; origin: string; destination: string; favoriteTone?: boolean };
/** Read-only presentation. No navigation, favorite mutation, time estimates or persistence. */
export function RoutePreviewCard({ number, origin, destination, favoriteTone }: Props) {
  return <Card tone={favoriteTone ? 'favorite' : 'surface'}>
    <View style={styles.heading}>
      <Badge label={number} tone={favoriteTone ? 'yellow' : 'blue'} />
      <AppText variant="subtitle" color={colors.primary} style={styles.flex}>Ruta {number}</AppText>
    </View>
    <View style={styles.location}><AppIcon icon={MapPin} size={18} color={colors.origin} /><AppText variant="label" style={styles.flex}>{origin}</AppText></View>
    <View style={styles.location}><AppIcon icon={MapPin} size={18} color={colors.destination} /><AppText variant="label" color={colors.textSecondary} style={styles.flex}>{destination}</AppText></View>
    <AppText variant="caption" color={colors.textSecondary}>Ejemplo visual</AppText>
  </Card>;
}
const styles = StyleSheet.create({ heading: { flexDirection: 'row', gap: spacing.md, alignItems: 'center' }, location: { flexDirection: 'row', gap: spacing.sm, alignItems: 'flex-start' }, flex: { flex: 1 } });
