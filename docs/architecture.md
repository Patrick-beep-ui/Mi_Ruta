# Arquitectura de Mi Ruta

Base implementada: Expo SDK 58, React Native, TypeScript, pnpm, React Navigation y SQLite local.

## Navegación

`App.tsx` monta GestureHandlerRootView → SafeAreaProvider → DatabaseProvider → NavigationContainer → RootNavigator. Existe un solo contenedor de navegación.

`RootNavigator` monta `DrawerNavigator`, que registra:

- `Main`: `BottomTabNavigator`, con `HomeTab` → `HomeStack` (Home y About), y `ExploreTab` → `ExploreStack` (Explore).
- `Settings`: pantalla de configuración fuera de los tabs.

Inicio, Explorar, Acerca de y Configuración son pantallas provisionales para comprobar la estructura. No implementan un catálogo, mapas, tracking ni preferencias reales. La jerarquía es una base de desarrollo revisable con Omar.

Cada sección tiene un stack, siguiendo la convención acordada. About demuestra push/back en el stack de Inicio. Al abrir About se conserva la barra inferior; Configuración queda fuera de ella. Los botones Menú despachan al drawer padre. Los nombres y parámetros están tipados en `src/navigators/types.ts`.

## Responsabilidades

| Carpeta | Responsabilidad |
| --- | --- |
| `src/navigators/` | Registrar destinos y opciones. Sin contenido, SQL ni HTTP. |
| `src/navigators/stack_navigators/` | Stacks de cada sección. |
| `src/screens/` | Componer layout y componentes; conectar acciones de navegación. |
| `src/layout/` | ScreenLayout, ScreenHeading y HeadingStyles compartidos. |
| `src/components/` | Contenido visual reutilizable, actualmente StatusContent. |
| `src/context/` | DatabaseProvider y contexto de conexión. |
| `src/hooks/` | useConnection: acceso a la conexión ya inicializada. |
| `src/config/` | Nombre de base de datos; no abre conexiones al importar. |
| `src/database/` | Inicialización del esquema y futuras migraciones. |
| `src/services/` | Lugar reservado y documentado para operaciones de datos. |

`ScreenLayout` dibuja el encabezado y aplica safe areas; todos los headers de navegadores están ocultos. En pantallas dentro de tabs la barra inferior consume el inset inferior. Configuración y el inicio de SQLite usan `bottomInset` porque no tienen esa barra. El contenido no está envuelto en un ScrollView global: cada lista, formulario o mapa podrá administrar su desplazamiento.

## SQLite

Se conserva `mi-ruta.db`, el nombre del archivo existente. La conexión antes creada mediante top-level await en `config/db.ts` pasa a ser propiedad de DatabaseProvider. Se abre una vez por montaje del provider, se inicializa antes de mostrar la navegación y se cierra al desmontar; la conexión pendiente también se libera si se cancela el montaje. Hay estado de carga, error y reintento.

La inicialización activa foreign keys y no crea entidades inventadas. Cuando se acuerde el dominio, agregar migraciones versionadas antes de exponer la conexión. Las operaciones de servicios reciben la conexión de `useConnection()`; no deben crear otra. Usar consultas parametrizadas y transacciones cuando se necesiten cambios atómicos.

## Autenticación y servicios remotos

No hay login obligatorio ni autenticación simulada. `AuthNavigator.tsx`, `AuthLayout.tsx` y `AuthStyles.ts` se agregarán al mismo nivel que los otros navegadores/layouts cuando se defina el flujo. RootNavigator será el punto para seleccionar el flujo de sesión y contemplar su restauración inicial. No copiar la comparación local de contraseñas de los proyectos de clase.

No se agrega Axios ni un cliente remoto sin backend definido. Se crean servicios y tipos de dominio cuando aparezcan operaciones reales.

## Agregar una vista

1. Crear el contenido reutilizable en `components/`.
2. Componerlo en `screens/` con ScreenLayout.
3. Registrar nombre y parámetros en `navigators/types.ts`.
4. Registrar la pantalla en el stack responsable. Crear otro stack solo si requiere una sección o historial propio.
5. Extraer SQL y HTTP a servicios; compartir solo el estado necesario mediante hooks/contextos.
6. Comprobar Atrás, Menú, headers y safe areas y actualizar esta documentación.

## Verificación manual en Android/iOS

1. Iniciar la app: termina la preparación y aparece Inicio.
2. Abrir Acerca de Mi Ruta: aparece Volver y la barra inferior permanece visible.
3. Volver por el botón y por el gesto/botón del sistema.
4. Cambiar entre Inicio y Explorar.
5. Abrir Menú desde ambas secciones; abrir Configuración y regresar a Inicio desde el drawer.
6. Revisar que no haya encabezados duplicados ni contenido bajo el notch o indicador inferior.
7. Simular un fallo de apertura SQLite durante desarrollo: debe mostrarse Reintentar. Restaurar la apertura y reintentar.
8. Cuando existan tablas, comprobar persistencia tras cerrar/reabrir y migración desde una versión anterior.

La exportación de bundles y TypeScript no sustituyen estas pruebas de interacción en dispositivo.

## Validación realizada en esta PR

- `pnpm typecheck`: correcto.
- `pnpm lint`: correcto.
- `pnpm peers check`: sin incompatibilidades de peers.
- `pnpm exec expo install --check`: versiones compatibles con SDK 58.
- `pnpm dlx expo-doctor`: 20/20 comprobaciones correctas.
- Exportación Metro/Hermes para Android e iOS: correcta.
- Interacción y persistencia en dispositivo: pendiente; este entorno no tiene un dispositivo/emulador móvil conectado.

## Referencias

- [Guía de arquitectura completa](React_Native_Architecture_Playbook.md).
- [React Navigation: nesting navigators](https://reactnavigation.org/docs/nesting-navigators/).
- [Expo SQLite SDK 58](https://docs.expo.dev/versions/v58.0.0/sdk/sqlite/).
