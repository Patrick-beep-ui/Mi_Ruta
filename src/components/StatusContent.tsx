import { View, StyleSheet } from 'react-native';
import { AppText } from './ui/AppText';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { colors, spacing } from '../theme/tokens';
type Props = { title: string; description: string; actionLabel?: string; onAction?: () => void };
export function StatusContent({ title, description, actionLabel, onAction }: Props) {
  return <Card style={styles.container}>
    <AppText variant="section" color={colors.primary}>{title}</AppText>
    <AppText color={colors.textSecondary}>{description}</AppText>
    {actionLabel && onAction ? <View style={styles.action}><Button label={actionLabel} onPress={onAction} /></View> : null}
  </Card>;
}
const styles = StyleSheet.create({ container: { marginVertical: spacing.xl, gap: spacing.lg }, action: { alignSelf: 'flex-start', maxWidth: '100%' } });
