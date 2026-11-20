/** Mi Ruta design system, edition 02. Values measured from the visual reference. */
export const colors = {
  primary: '#013089', primaryPressed: '#0B2564', accent: '#FEC108', accentPressed: '#E3AB00',
  background: '#F5F7FB', surface: '#FFFFFF', input: '#F6F6F6', favorite: '#FEF9E2',
  gradientEnd: '#1C88E3', text: '#17212B', textSecondary: '#6B7280', border: '#DDE3EC',
  disabled: '#E4E8EF', disabledText: '#9BA5B3', tabActive: '#38869B', tabInactive: '#929B9B',
  origin: '#4CAF50', destination: '#E91E63', route: '#1C88E3', onBrand: '#FFFFFF',
} as const;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48 } as const;
export const radii = { small: 8, card: 16, panel: 20, pill: 999 } as const;
export const metrics = { touchTarget: 44, buttonHeight: 48, fieldHeight: 54, icon: 24, iconStroke: 1.8, maxContentWidth: 640 } as const;
export const fontFamilies = { regular: 'Inter-Regular', medium: 'Inter-Medium', semibold: 'Inter-SemiBold', bold: 'Inter-Bold' } as const;
export const typeScale = {
  title: { fontSize: 28, lineHeight: 34, weight: 'semibold' },
  section: { fontSize: 22, lineHeight: 28, weight: 'semibold' },
  subtitle: { fontSize: 18, lineHeight: 24, weight: 'semibold' },
  body: { fontSize: 16, lineHeight: 24, weight: 'regular' },
  label: { fontSize: 14, lineHeight: 20, weight: 'medium' },
  caption: { fontSize: 12, lineHeight: 16, weight: 'regular' },
} as const;
export type TextVariant = keyof typeof typeScale;
export type FontWeight = keyof typeof fontFamilies;
