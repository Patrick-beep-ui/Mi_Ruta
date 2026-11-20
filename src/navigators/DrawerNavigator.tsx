import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, type DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Home, Settings } from 'lucide-react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import type { DrawerParamList } from './types';
import { BrandLogo } from '../components/brand/BrandLogo';
import { AppText } from '../components/ui/AppText';
import { AppIcon } from '../components/ui/AppIcon';
import { colors, spacing } from '../theme/tokens';
const Drawer = createDrawerNavigator<DrawerParamList>();
function DrawerContent(props: DrawerContentComponentProps) {
  return <DrawerContentScrollView {...props}>
    <View style={styles.brand}><BrandLogo /><AppText variant="label" color={colors.primary}>Tu camino, nuestra ruta.</AppText></View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>;
}
export function DrawerNavigator() {
  return <Drawer.Navigator drawerContent={DrawerContent} screenOptions={{
    headerShown: false, drawerActiveTintColor: colors.primary, drawerActiveBackgroundColor: colors.favorite,
    drawerInactiveTintColor: colors.textSecondary, drawerStyle: { backgroundColor: colors.surface },
  }}>
    <Drawer.Screen name="Main" component={BottomTabNavigator} options={{ title: 'Inicio', drawerIcon: ({ color, size }) => <AppIcon icon={Home} color={color} size={size} /> }} />
    <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración', drawerIcon: ({ color, size }) => <AppIcon icon={Settings} color={color} size={size} /> }} />
  </Drawer.Navigator>;
}
const styles = StyleSheet.create({ brand: { padding: spacing.xl, gap: spacing.md } });
