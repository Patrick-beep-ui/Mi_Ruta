import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Map } from 'lucide-react-native';
import { HomeStack } from './stack_navigators/HomeStack';
import { ExploreStack } from './stack_navigators/ExploreStack';
import type { BottomTabParamList } from './types';
import { colors, radii, spacing } from '../theme/tokens';
import { AppIcon } from '../components/ui/AppIcon';
import { AppText } from '../components/ui/AppText';
const Tab = createBottomTabNavigator<BottomTabParamList>();
export function BottomTabNavigator() {
  return <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false, tabBarActiveTintColor: colors.tabActive, tabBarInactiveTintColor: colors.tabInactive,
    tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border, borderTopLeftRadius: radii.panel, borderTopRightRadius: radii.panel },
    tabBarItemStyle: { paddingVertical: spacing.xs },
    tabBarIcon: ({ color, size }) => <AppIcon icon={route.name === 'HomeTab' ? Search : Map} color={color} size={size} />,
    tabBarLabel: ({ color, children }) => <AppText variant="caption" color={color}>{children}</AppText>,
  })}>
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Buscador' }} />
    <Tab.Screen name="ExploreTab" component={ExploreStack} options={{ title: 'Rutas' }} />
  </Tab.Navigator>;
}
