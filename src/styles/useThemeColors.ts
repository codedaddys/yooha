import { useMemo } from "react";
import { darkThemeColors } from "./darkThemeColors";
import { lightThemeColors } from "./lightThemeColors";
import { useAppColorScheme } from "./useAppColorScheme";

export type ThemeColor = keyof typeof lightThemeColors;

/**
 * @param {ThemeColor[]} keys ThemeColor keys
 * @description Takes in a set of ThemeColor keys and returns an array of colors, in order of the keys
 * @returns {String[]} Array of string colors
 */
export function useThemeColors(keys: ThemeColor[]) {
  const colorScheme = useAppColorScheme();

  const themeColors = useMemo(
    () => (colorScheme === "dark" ? darkThemeColors : lightThemeColors),
    [colorScheme],
  );
  const colors = useMemo(
    () => keys.map((key) => themeColors[key]),
    [keys, themeColors],
  );

  return colors;
}
