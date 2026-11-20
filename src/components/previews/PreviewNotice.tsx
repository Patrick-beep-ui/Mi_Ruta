import { View, StyleSheet } from 'react-native';
import { Info } from 'lucide-react-native';
import { AppIcon } from '../ui/AppIcon';
import { AppText } from '../ui/AppText';
import { Card } from '../ui/Card';
import { colors, spacing } from '../../theme/tokens';
export function PreviewNotice() {
  return <Card tone="favorite" style={styles.notice}>
    <AppIcon icon={Info} size={20} />
    <View style={styles.copy}>
      <AppText variant="label" weight="semibold" color={colors.primary}>Vista previa</AppText>
      <AppText variant="caption" color={colors.primary}>Datos de muestra. La búsqueda y las acciones todavía no están disponibles.</AppText>
    </View>
  </Card>;
}
const styles = StyleSheet.create({ notice: { flexDirection: 'row', alignItems: 'flex-start' }, copy: { flex: 1, gap: spacing.xs } });
