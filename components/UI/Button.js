import { View, Pressable, Text, StyleSheet } from "react-native";
import colors from "../../const/colors";
function Button({ title, onPress, mode,style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=> pressed ? styles.pressed : 'null'}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: colors.bluedark,
    borderRadius: 4,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
  flatText: {
    color: colors.black,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.bluedark,
    borderRadius: 4,

  },
});
export default Button;
