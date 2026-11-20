import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeading } from './ScreenHeading';

type Props = PropsWithChildren<{
  title: string;
  padded?: boolean;
  bottomInset?: boolean;
  onBack?: () => void;
  onMenu?: () => void;
}>;

export function ScreenLayout({ children, title, padded = true, bottomInset = false, onBack, onMenu }: Props) {
  return (
    <SafeAreaView style={styles.screen} edges={bottomInset ? ['top', 'left', 'right', 'bottom'] : ['top', 'left', 'right']}>
      <ScreenHeading title={title} onBack={onBack} onMenu={onMenu} />
      <View style={[styles.content, padded && styles.padded]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f7f9fb' },
  content: { flex: 1 },
  padded: { paddingHorizontal: 16 },
});
