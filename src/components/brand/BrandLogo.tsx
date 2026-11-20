import { Image, View, StyleSheet } from 'react-native';
import { radii } from '../../theme/tokens';
export function BrandLogo({ size = 112 }: { size?: number }) {
  return <View style={[styles.frame, { width: size, height: size }]}>
    <Image source={require('../../../assets/brand/mi-ruta-reference.png')} resizeMode="contain" style={styles.image} accessibilityLabel="Mi Ruta: autobús sobre una R amarilla" />
  </View>;
}
const styles = StyleSheet.create({ frame: { borderRadius: radii.card, overflow: 'hidden' }, image: { width: '100%', height: '100%' } });
