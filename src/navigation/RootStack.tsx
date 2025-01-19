import type { StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "./BottomTabs";
import { SearchResultDetailsScreen } from "../screens/SearchResultDetails";

export const RootStack = createNativeStackNavigator({
  screens: {
    Tabs: {
      screen: BottomTabs,
      options: {
        headerShown: false,
      },
    },
    SearchResultDetails: {
      screen: SearchResultDetailsScreen,
      options: {
        presentation: "modal",
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

// https://reactnavigation.org/docs/typescript/
/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-object-type */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
/* eslint-enable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-object-type */
