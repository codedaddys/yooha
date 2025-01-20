import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import SearchSvg from "../../assets/svgs/search.svg";
import UserSvg from "../../assets/svgs/user.svg";
import { palette } from "../styles/palette";

export const BottomTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarShowLabel: false,
    tabBarActiveTintColor: palette.primary500,
    tabBarInactiveTintColor: palette.greyscale500,
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
