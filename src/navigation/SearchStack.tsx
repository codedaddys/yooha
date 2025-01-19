import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/Search";

export const SearchStack = createNativeStackNavigator({
  screens: {
    Search: {
      screen: SearchScreen,
      options: {
        headerShown: false,
      },
    },
  },
});
