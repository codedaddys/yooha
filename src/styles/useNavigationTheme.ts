import type { Theme } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { useAppColorScheme } from "./useAppColorScheme";
import { useThemeColors } from "./useThemeColors";

export function useNavigationTheme(): Theme {
  const colorScheme = useAppColorScheme();
  const [background, text, border, primary] = useThemeColors([
    "screenBackground",
    "textDefault",
    "navigationBorder",
    "navigationPrimary",
  ]);

  const darkTheme = useMemo(
    () => ({
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background,
        card: background,
        text,
        border,
        primary,
      },
    }),
    [background, border, primary, text],
  );

  const value = useMemo(
    () => (colorScheme === "dark" ? darkTheme : DefaultTheme),
    [colorScheme, darkTheme],
  );

  return value;
}
