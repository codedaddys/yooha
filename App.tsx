import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";
import { ApiClientProvider } from "./src/services/client/Provider";

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return (
    <ApiClientProvider>
      <Navigation />
    </ApiClientProvider>
  );
}
