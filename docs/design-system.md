# Mi Ruta design system - implementation

Source: Mi_Ruta_Design_System.pdf, edition 02 (12 visual sheets). Applied through the existing layouts and explicit React Navigation architecture, without adding domain features.

## Tokens

`src/theme/tokens.ts` is the source of truth. Primary #013089, accent #FEC108, cards #FFFFFF, background #F5F7FB, inputs #F6F6F6, favorites #FEF9E2, gradient end #1C88E3. Semantic marker and inactive/pressed colors are UI proposals from the guide, not original source-code exports.

Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48. Radii: 8 / 16 / 20 / pill. Touch targets >=44; buttons >=48; fields >=54. Components use minimum heights and text wrapping so increased font sizes do not crop labels.

Inter is the proposed UI font in the approved visual guide, not a claim about the old app's font. Four weights are bundled locally with OFL license. DesignSystemProvider waits for local font loading; if it fails, the UI uses system fonts instead of blocking the application. The raster wordmark is unchanged. See assets/fonts/README.md and assets/brand/README.md for provenance.

## Shared building blocks

| Element | Responsibility |
| --- | --- |
| AppText | Type scale, font weight and color, preserving system font scaling. |
| AppIcon | Typed Lucide icons with a consistent 1.8 stroke; decorative by default. |
| Button | Primary, secondary and soft variants; pressed, disabled, focused and loading states. Missing handlers are disabled. |
| IconButton | Accessible label and minimum 44-unit touch target. |
| TextField | Label, icon, focus, error/hint and native text input. No validation or API logic. |
| Card / Badge | Surface, favorite and subtle cards; blue/yellow/neutral badges. |
| BrandLogo / BrandHero | Original raster reference, preserved proportions, optional shared gradient hero. |
| ScreenLayout / ScreenHeading | Safe areas, bounded content width, heading and focus-aware status bar. |

Lucide replaces the provisional dot icons, providing the linear icon family proposed by the PDF; it is not described as the original icon source. The color scheme is light, as in app.json. No new dark theme is introduced.

## Integration

The font provider wraps DatabaseProvider so loading/error screens share typography. A single NavigationContainer receives brand colors and fonts. Tabs and Drawer reuse these foundations without changing their destination hierarchy. Every layout owns one heading; navigator headers remain hidden. The drawer keeps its working navigation actions. App-store/adaptive icon assets are unchanged because the available logo is a raster crop with a background, not a production master.

## Scope and validation

PR 1 applies foundations to the existing screens. New illustrative screens are isolated in a subsequent PR. No authentication, queries, route search, map provider, favorites persistence or domain schema is added.

Run `pnpm typecheck`, `pnpm lint`, `pnpm exec expo install --check`, `pnpm peers check`, `pnpm dlx expo-doctor`, and mobile bundle exports. In a native client, inspect font load/fallback, long labels at increased text size, Drawer/Tabs/Back, safe areas and contrast. Bundle export does not establish native interaction correctness.

## Static screen previews (dependent PR)

HomeScreen and ExploreScreen now compose the shared system into a search preview and sample route catalog. Only the existing tab labels/icons change to Buscador and Rutas; route keys and stack/drawer hierarchy stay unchanged.

All illustrative content lives in `components/previews/`, including explicitly non-authoritative `routeExamples`. Fields are read-only, search/clear controls are disabled, and route cards are not pressable. Visible PreviewNotice and per-card labels distinguish these fixtures from real transit data. There are no fake alerts, loading timers, search/filter implementations, detail routes, map tiles, favorite state, DB writes or HTTP calls. About, Drawer and Back retain their existing real navigation actions.

Native manual check: scroll both screens at 320-unit width and increased text size; confirm disabled actions do nothing, fields do not open a keyboard, labels wrap, all cards can be reached, menus and About/Back still work, and status bar changes correctly when opening light-background screens.
