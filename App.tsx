import { createStaticNavigation } from "@react-navigation/native";
import { RootStack } from "./src/navigation/RootStack";
import { ApiClientProvider } from "./src/services/client/Provider";
import { useNavigationTheme } from "./src/styles";

const Navigation = createStaticNavigation(RootStack);

export function App() {
  const theme = useNavigationTheme();

  return (
    <ApiClientProvider>
      <Navigation theme={theme} />
    </ApiClientProvider>
  );
}
