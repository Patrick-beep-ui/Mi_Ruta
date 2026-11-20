import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusContent } from '../components/StatusContent';
import { ScreenLayout } from '../layout/ScreenLayout';
import type { HomeStackParamList } from '../navigators/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'About'>;

export function AboutScreen({ navigation }: Props) {
  return (
    <ScreenLayout title="Acerca de Mi Ruta" onBack={() => navigation.goBack()}>
      <StatusContent title="Un nuevo comienzo" description="Mi Ruta es un proyecto de Patrick Solis, Omar Quintanilla y Luis Saravia. Esta versión está en construcción." />
    </ScreenLayout>
  );
}
