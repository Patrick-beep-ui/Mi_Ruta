import { DrawerNavigator } from './DrawerNavigator';

export function RootNavigator() {
  // Add conditional AuthNavigator here only when the access model is defined.
  return <DrawerNavigator />;
}
