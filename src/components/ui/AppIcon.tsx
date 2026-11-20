import type { LucideIcon } from 'lucide-react-native';
import { colors, metrics } from '../../theme/tokens';
export type IconComponent = LucideIcon;
export function AppIcon({ icon: Icon, size = metrics.icon, color = colors.primary }: { icon: IconComponent; size?: number; color?: string }) {
  return <Icon size={size} color={color} strokeWidth={metrics.iconStroke} accessible={false} />;
}
