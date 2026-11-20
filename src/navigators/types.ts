import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = { Home: undefined; About: undefined };
export type ExploreStackParamList = { Explore: undefined };
export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ExploreTab: NavigatorScreenParams<ExploreStackParamList>;
};
export type DrawerParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Settings: undefined;
};
