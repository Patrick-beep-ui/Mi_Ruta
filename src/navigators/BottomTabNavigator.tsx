import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { HomeStack } from './stack_navigators/HomeStack';
import { ExploreStack } from './stack_navigators/ExploreStack';
import type { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#245b85',
      tabBarIcon: ({ color }) => <Text style={{ color }} accessibilityElementsHidden>●</Text>,
    }}>
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Inicio' }} />
      <Tab.Screen name="ExploreTab" component={ExploreStack} options={{ title: 'Explorar' }} />
    </Tab.Navigator>
  );
}
