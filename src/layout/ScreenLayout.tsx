import { useContext, type PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContext, useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeading } from './ScreenHeading';
import { colors, metrics, spacing } from '../theme/tokens';
type Props = PropsWithChildren<{
  title: string; padded?: boolean; bottomInset?: boolean;
  onBack?: () => void; onMenu?: () => void; tone?: 'surface' | 'brand';
}>;
function FocusedStatusBar({ inverse }: { inverse: boolean }) {
  const focused = useIsFocused();
  return focused ? <StatusBar style={inverse ? 'light' : 'dark'} /> : null;
}
export function ScreenLayout({ children, title, padded = true, bottomInset = false, onBack, onMenu, tone = 'surface' }: Props) {
  const navigation = useContext(NavigationContext);
  const inverse = tone === 'brand';
  return <SafeAreaView style={[styles.screen, { backgroundColor: inverse ? colors.primary : colors.background }]}
    edges={bottomInset ? ['top', 'left', 'right', 'bottom'] : ['top', 'left', 'right']}>
    {navigation ? <FocusedStatusBar inverse={inverse} /> : <StatusBar style={inverse ? 'light' : 'dark'} />}
    <View style={styles.frame}>
      <ScreenHeading title={title} onBack={onBack} onMenu={onMenu} inverse={inverse} />
      <View style={[styles.content, padded && styles.padded]}>{children}</View>
    </View>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: { flex: 1 }, frame: { flex: 1, width: '100%', maxWidth: metrics.maxContentWidth, alignSelf: 'center' },
  content: { flex: 1 }, padded: { paddingHorizontal: spacing.lg },
});
