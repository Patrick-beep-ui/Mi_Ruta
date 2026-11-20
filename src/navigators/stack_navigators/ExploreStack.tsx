import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExploreScreen } from '../../screens/ExploreScreen';
import type { ExploreStackParamList } from '../types';

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
}
