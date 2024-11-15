import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../../const/colors";
import { useNavigation } from "@react-navigation/native";


function ExpenseItem({ title, amount, date, id }) {
  const navigation = useNavigation();
  
  const expensePressHandler = () => {
    navigation.navigate("ManageExpense",{expenseId:id})
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View style={styles.expenseContainer}>
        <View style={styles.expenseDescription}>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.expenseAmount}>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseContainer: {
    flexDirection: "row",
    backgroundColor: colors.lightblue,
    borderRadius: 4,
    justifyContent: "space-between",
    margin: 10,
    padding: 20,
    alignItems: "center",
  },
  expenseDescription: {
    gap: 10,
  },
  expenseAmount: {
    backgroundColor: colors.bluedark,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
  titleText:{
    fontWeight:'bold',
    fontSize:15
  }
});
export default ExpenseItem;
