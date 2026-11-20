import { BrandLogo } from '../components/brand/BrandLogo';
import { DrawerActions } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusContent } from '../components/StatusContent';
import { ScreenLayout } from '../layout/ScreenLayout';
import type { HomeStackParamList } from '../navigators/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <ScreenLayout title="Mi Ruta" onMenu={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <BrandLogo />
      <StatusContent
        title="Bienvenido a Mi Ruta"
        description="Estamos preparando una nueva experiencia. Pronto encontrarás más novedades aquí."
        actionLabel="Acerca de Mi Ruta"
        onAction={() => navigation.navigate('About')}
      />
    </ScreenLayout>
  );
}
