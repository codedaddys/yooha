import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function SearchScreen() {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate("SearchResultDetails");
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>

      <TouchableOpacity
        onPress={onPress}
        style={{ padding: 12, margin: 16, backgroundColor: "yellow" }}
      >
        <Text>Go to Search Details</Text>
      </TouchableOpacity>
    </View>
  );
}
