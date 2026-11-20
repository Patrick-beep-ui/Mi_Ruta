import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function StatusContent({ title, description, actionLabel, onAction }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {actionLabel && onAction ? (
        <Pressable accessibilityRole="button" onPress={onAction} style={styles.button}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16, paddingVertical: 24 },
  title: { fontSize: 21, fontWeight: '600', color: '#17212b' },
  description: { fontSize: 16, lineHeight: 24, color: '#465464' },
  button: { alignSelf: 'flex-start', backgroundColor: '#245b85', padding: 14, borderRadius: 8, minHeight: 48 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
