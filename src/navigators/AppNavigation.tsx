import { NavigationContainer } from '@react-navigation/native';
import { useBrandFonts } from '../theme/DesignSystemProvider';
import { getNavigationTheme } from '../theme/navigationTheme';
import { RootNavigator } from './RootNavigator';
export function AppNavigation() {
  const fontsReady = useBrandFonts();
  return <NavigationContainer theme={getNavigationTheme(fontsReady)}><RootNavigator /></NavigationContainer>;
}
