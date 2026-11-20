import type { DrawerScreenProps } from '@react-navigation/drawer';
import { StatusContent } from '../components/StatusContent';
import { ScreenLayout } from '../layout/ScreenLayout';
import type { DrawerParamList } from '../navigators/types';

type Props = DrawerScreenProps<DrawerParamList, 'Settings'>;

export function SettingsScreen({ navigation }: Props) {
  return (
    <ScreenLayout title="Configuración" bottomInset onMenu={() => navigation.openDrawer()}>
      <StatusContent title="Próximamente" description="Las opciones de configuración estarán disponibles en una próxima versión." />
    </ScreenLayout>
  );
}
