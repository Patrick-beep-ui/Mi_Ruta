import { DrawerActions } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet } from 'react-native';
import { ScreenLayout } from '../layout/ScreenLayout';
import { BrandHero } from '../components/brand/BrandHero';
import { AppText } from '../components/ui/AppText';
import { Button } from '../components/ui/Button';
import { PreviewNotice } from '../components/previews/PreviewNotice';
import { SearchPreview } from '../components/previews/SearchPreview';
import { RoutePreviewCard } from '../components/previews/RoutePreviewCard';
import { routeExamples } from '../components/previews/routeExamples';
import { colors, spacing } from '../theme/tokens';
import type { HomeStackParamList } from '../navigators/types';
type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;
export function HomeScreen({ navigation }: Props) {
  return <ScreenLayout title="Mi Ruta" tone="brand" onMenu={() => navigation.dispatch(DrawerActions.openDrawer())}>
    <ScrollView contentContainerStyle={styles.content}>
      <BrandHero title="Encontrá tu camino." description="Tu camino, nuestra ruta." />
      <PreviewNotice />
      <SearchPreview />
      <AppText variant="section" color={colors.onBrand} accessibilityRole="header">Así se verán tus rutas</AppText>
      <RoutePreviewCard {...routeExamples[0]} favoriteTone />
      <Button label="Acerca de Mi Ruta" variant="secondary" onPress={() => navigation.navigate('About')} />
    </ScrollView>
  </ScreenLayout>;
}
const styles = StyleSheet.create({ content: { paddingTop: spacing.sm, paddingBottom: spacing.xl, gap: spacing.xl } });
