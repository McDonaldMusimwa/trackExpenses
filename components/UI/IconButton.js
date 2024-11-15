import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ color, size, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  iconContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 8,
  },
});
export default IconButton;
