import { View } from 'react-native';
import { ArrowLeft, Menu } from 'lucide-react-native';
import { headingStyles as styles } from './HeadingStyles';
import { AppText } from '../components/ui/AppText';
import { IconButton } from '../components/ui/IconButton';
import { colors } from '../theme/tokens';
type Props = { title: string; onBack?: () => void; onMenu?: () => void; inverse?: boolean };
export function ScreenHeading({ title, onBack, onMenu, inverse }: Props) {
  return <View style={styles.container}>
    {onBack ? <IconButton icon={ArrowLeft} label="Volver" onPress={onBack} inverse={inverse} /> :
      onMenu ? <IconButton icon={Menu} label="Abrir menú" onPress={onMenu} inverse={inverse} /> : null}
    <AppText accessibilityRole="header" variant="section" color={inverse ? colors.onBrand : colors.primary} style={styles.title}>{title}</AppText>
  </View>;
}
