import { useMemo } from "react";
import type { ThemeColor } from "../../styles";
import { useThemeColors } from "../../styles";
import type { VariantKey } from "./types";

const colorMap: {
  [key in VariantKey | "disabled"]: {
    backgroundColorKey: ThemeColor;
    textColorKey: ThemeColor;
  };
} = {
  primary: {
    backgroundColorKey: "buttonPrimary",
    textColorKey: "buttonPrimaryText",
  },
  secondary: {
    backgroundColorKey: "buttonSecondary",
    textColorKey: "buttonSecondaryText",
  },
  disabled: {
    backgroundColorKey: "buttonDisabled",
    textColorKey: "buttonDisabledText",
  },
};

interface Props {
  variant: VariantKey;
  disabled: boolean;
}

export const useTextButton = ({ disabled, variant }: Props) => {
  const variantKey = disabled ? "disabled" : variant;
  const { backgroundColorKey, textColorKey } = colorMap[variantKey];
  const [backgroundColor, color] = useThemeColors([
    backgroundColorKey,
    textColorKey,
  ]);
  const borderColor = useMemo(
    () => (variantKey === "secondary" ? color : backgroundColor),
    [variantKey, color, backgroundColor],
  );

  return {
    borderColor,
    color,
    backgroundColor,
  };
};
