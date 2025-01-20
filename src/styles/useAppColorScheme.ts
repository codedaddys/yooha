import { useColorScheme } from "react-native";

// TODO Add setting to override
export function useAppColorScheme() {
  const systemColorScheme = useColorScheme();

  const colorScheme = systemColorScheme;

  return colorScheme;
}
