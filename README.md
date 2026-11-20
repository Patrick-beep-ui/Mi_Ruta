# Mi Ruta

Recreación de Mi Ruta. Base móvil con React Native, Expo SDK 58, TypeScript, pnpm y SQLite local. Backend, dominio y autenticación se definirán durante el desarrollo.

## Desarrollo

Usar Node.js 24 y pnpm 11.25.0 (la versión está fijada en package.json).

```bash
pnpm install --frozen-lockfile
pnpm start
```

| Acción | Comando |
| --- | --- |
| Android | `pnpm android` |
| iOS | `pnpm ios` |
| TypeScript | `pnpm typecheck` |
| Lint | `pnpm lint` |
| Instalar módulos compatibles con Expo | `pnpm exec expo install nombre-paquete --pnpm` |
| Comprobar compatibilidad | `pnpm exec expo install --check` |
| Exportar bundles móviles | `pnpm exec expo export --platform android --platform ios` |

Las pruebas móviles requieren un cliente o build compatible con SDK 58 y los módulos nativos instalados. Si se usa un development build anterior a estas dependencias, reconstruirlo.

El objetivo de esta base es Android/iOS. Web/SQLite requiere configuración adicional (WASM y headers de aislamiento) antes de considerarse soportado; el script web heredado no implica validación del navegador.

## Arquitectura

[Responsabilidades, jerarquía y pasos de validación](docs/architecture.md).

La navegación explícita usa Drawer → Bottom Tabs → Stacks. Los navegadores importan pantallas; las pantallas componen layouts y componentes. ScreenLayout controla los encabezados. DatabaseProvider administra la conexión SQLite sin top-level await ni conexiones por pantalla.

Las vistas incluidas son provisionales. No hay autenticación, datos de transporte ni sincronización remota implementados.

## Sistema visual

[Tokens, tipografía, assets y componentes compartidos](docs/design-system.md). El sistema usa Inter local, azul #013089 y amarillo #FEC108 según la edición 02 de la guía visual.
