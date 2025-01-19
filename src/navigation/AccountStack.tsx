import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account";

export const AccountStack = createNativeStackNavigator({
  screens: {
    Account: AccountScreen,
  },
});
