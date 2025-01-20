import React from "react";
import type { ViewStyle } from "react-native";
import { Pressable, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
import type { VariantKey } from "./types";
import { useTextButton } from "./useTextButton";

interface Props {
  variant?: VariantKey;
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export function TextButton({
  variant = "primary",
  text,
  disabled = false,
  onPress,
  style,
}: Props) {
  const { borderColor, color, backgroundColor } = useTextButton({
    variant,
    disabled,
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => {
        return [
          styles.base,
          style,
          {
            backgroundColor,
            borderColor,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.995 : 1 }],
          },
        ];
      }}
    >
      <StyledText style={{ color }} variant="button">
        {text}
      </StyledText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
});
