import { Pressable, Text, View } from 'react-native';
import { headingStyles as styles } from './HeadingStyles';

type Props = { title: string; onBack?: () => void; onMenu?: () => void };

export function ScreenHeading({ title, onBack, onMenu }: Props) {
  return (
    <View style={styles.container}>
      {onBack || onMenu ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={onBack ? 'Volver' : 'Abrir menú'}
          onPress={onBack ?? onMenu}
          style={styles.action}
        >
          <Text style={styles.actionText}>{onBack ? 'Volver' : 'Menú'}</Text>
        </Pressable>
      ) : null}
      <Text accessibilityRole="header" style={styles.title}>{title}</Text>
    </View>
  );
}
