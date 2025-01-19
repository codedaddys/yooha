import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return <Navigation />;
}
