import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

export const BottomTabs = createBottomTabNavigator({
  screens: {
    SearchTab: {
      screen: SearchStack,
      options: {
        headerShown: false,
      },
    },
    AccountTab: {
      screen: AccountStack,
      options: {
        headerShown: false,
      },
    },
  },
});
