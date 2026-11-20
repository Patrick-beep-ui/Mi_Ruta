import { StyleSheet } from 'react-native';

export const headingStyles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  title: { flex: 1, fontSize: 24, fontWeight: '600', color: '#17212b' },
  action: { minHeight: 44, minWidth: 44, justifyContent: 'center' },
  actionText: { color: '#245b85', fontSize: 16, fontWeight: '600' },
});
