import { StyleSheet, View } from 'react-native';
import { Footprints, MapPin, Search } from 'lucide-react-native';
import { Card } from '../ui/Card';
import { TextField } from '../ui/TextField';
import { Button } from '../ui/Button';
import { spacing } from '../../theme/tokens';
export function SearchPreview() {
  return <Card style={styles.panel}>
    <TextField label="Origen" placeholder="¿Desde dónde salís?" icon={Footprints} editable={false} accessibilityHint="Campo de muestra. La búsqueda aún no está disponible." />
    <TextField label="Destino" placeholder="¿A dónde querés ir?" icon={MapPin} editable={false} accessibilityHint="Campo de muestra. La búsqueda aún no está disponible." />
    <View style={styles.actions}>
      <Button label="Limpiar" variant="soft" disabled style={styles.action} />
      <Button label="Buscar ruta" icon={Search} disabled style={styles.action} />
    </View>
  </Card>;
}
const styles = StyleSheet.create({ panel: { gap: spacing.xl }, actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }, action: { flexGrow: 1, flexBasis: 120 } });
