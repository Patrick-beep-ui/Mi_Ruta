import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatabaseProvider } from './src/context/DatabaseProvider';
import { AppNavigation } from './src/navigators/AppNavigation';
import { DesignSystemProvider } from './src/theme/DesignSystemProvider';
export default function App() {
  return <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <DesignSystemProvider>
        <DatabaseProvider><AppNavigation /></DatabaseProvider>
      </DesignSystemProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>;
}
