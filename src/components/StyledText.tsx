import React from "react";
import type { TextProps } from "react-native";
import { StyleSheet, Text } from "react-native";
import type { ThemeColor } from "../styles";
import { useThemeColors } from "../styles";

interface Props extends TextProps {
  variant: keyof typeof styledTextStyles;
  themeColor?: ThemeColor;
}

export function StyledText({
  themeColor = "textDefault",
  style,
  variant,
  ...rest
}: Props) {
  const variantStyle = styledTextStyles[variant];
  const [color] = useThemeColors([themeColor]);

  return <Text style={[variantStyle, { color }, style]} {...rest} />;
}

const bodyStyles = {
  xl: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.002,
  },
  lg: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.002,
  },
  md: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.002,
  },
  sm: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.002,
  },
  xs: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.002,
  },
};

export const styledTextStyles = StyleSheet.create({
  heading1: {
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 53,
  },
  heading2: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 44,
  },
  heading3: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 35,
  },
  heading4: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 29,
  },
  heading5: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
  },
  heading6: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 22,
  },
  bodyXLRegular: {
    ...bodyStyles.xl,
  },
  bodyXLBold: {
    fontWeight: 700,
    ...bodyStyles.xl,
  },
  bodyXLSemiBold: {
    fontWeight: 600,
    ...bodyStyles.xl,
  },
  bodyXLMedium: {
    fontWeight: 500,
    ...bodyStyles.xl,
  },
  bodyLGRegular: {
    ...bodyStyles.lg,
  },
  bodyLGBold: {
    fontWeight: 700,
    ...bodyStyles.lg,
  },
  bodyLGSemiBold: {
    fontWeight: 600,
    ...bodyStyles.lg,
  },
  bodyLGMedium: {
    fontWeight: 500,
    ...bodyStyles.lg,
  },
  bodyMDRegular: {
    ...bodyStyles.md,
  },
  bodyMDBold: {
    fontWeight: 700,
    ...bodyStyles.md,
  },
  bodyMDSemiBold: {
    fontWeight: 600,
    ...bodyStyles.md,
  },
  bodyMDMedium: {
    fontWeight: 500,
    ...bodyStyles.md,
  },
  bodySMRegular: {
    ...bodyStyles.sm,
  },
  bodySMBold: {
    fontWeight: 700,
    ...bodyStyles.sm,
  },
  bodySMSemiBold: {
    fontWeight: 600,
    ...bodyStyles.sm,
  },
  bodySMMedium: {
    fontWeight: 500,
    ...bodyStyles.sm,
  },
  bodyXSRegular: {
    ...bodyStyles.xs,
  },
  bodyXSBold: {
    fontWeight: 700,
    ...bodyStyles.xs,
  },
  bodyXSSemiBold: {
    fontWeight: 600,
    ...bodyStyles.xs,
  },
  bodyXSMedium: {
    fontWeight: 500,
    ...bodyStyles.xs,
  },
  button: {
    fontWeight: 700,
    ...bodyStyles.md,
    textTransform: "uppercase",
  },
});
