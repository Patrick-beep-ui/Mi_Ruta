import { DrawerActions } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';
import { ScreenLayout } from '../layout/ScreenLayout';
import { AppText } from '../components/ui/AppText';
import { Card } from '../components/ui/Card';
import { TextField } from '../components/ui/TextField';
import { PreviewNotice } from '../components/previews/PreviewNotice';
import { RoutePreviewCard } from '../components/previews/RoutePreviewCard';
import { routeExamples } from '../components/previews/routeExamples';
import { colors, spacing } from '../theme/tokens';
import type { ExploreStackParamList } from '../navigators/types';
type Props = NativeStackScreenProps<ExploreStackParamList, 'Explore'>;
export function ExploreScreen({ navigation }: Props) {
  return <ScreenLayout title="Rutas" tone="brand" onMenu={() => navigation.dispatch(DrawerActions.openDrawer())}>
    <ScrollView contentContainerStyle={styles.content}>
      <PreviewNotice />
      <Card><TextField label="Buscar ruta" icon={Search} placeholder="Número o nombre de la ruta" editable={false} accessibilityHint="Vista previa sin filtro ni consulta de rutas." /></Card>
      <AppText variant="section" color={colors.onBrand} accessibilityRole="header">Rutas de ejemplo</AppText>
      {routeExamples.map((route) => <RoutePreviewCard key={route.number} {...route} />)}
    </ScrollView>
  </ScreenLayout>;
}
const styles = StyleSheet.create({ content: { paddingTop: spacing.sm, paddingBottom: spacing.xl, gap: spacing.lg } });
