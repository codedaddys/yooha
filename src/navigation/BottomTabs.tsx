import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import SearchSvg from "../../assets/svgs/search.svg";
import UserSvg from "../../assets/svgs/user.svg";

export const BottomTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarShowLabel: false,
    tabBarStyle: {
      paddingTop: 4,
    },
  },
  screens: {
    SearchTab: {
      screen: SearchStack,
      options: {
        headerShown: false,
        tabBarIcon: SearchSvg,
      },
    },
    AccountTab: {
      screen: AccountStack,
      options: {
        headerShown: false,
        tabBarIcon: UserSvg,
      },
    },
  },
});
