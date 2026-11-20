import { DrawerActions } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusContent } from '../components/StatusContent';
import { ScreenLayout } from '../layout/ScreenLayout';
import type { ExploreStackParamList } from '../navigators/types';

type Props = NativeStackScreenProps<ExploreStackParamList, 'Explore'>;

export function ExploreScreen({ navigation }: Props) {
  return (
    <ScreenLayout title="Explorar" onMenu={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <StatusContent title="Próximamente" description="Esta sección está en preparación." />
    </ScreenLayout>
  );
}
