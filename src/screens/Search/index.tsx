import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import { StyledText } from "../../components/StyledText";
import { TextButton } from "../../components/TextButton";

export function SearchScreen() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate("SearchResultDetails");
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText variant="heading3">Search</StyledText>
      <TextButton text="Go to Search Details" onPress={onPress} />
    </View>
  );
}
