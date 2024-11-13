import { View, Text, StyleSheet } from "react-native";
import colors from "../../../const/colors";

function ExpenseItem({ title, amount, date }) {
  return (
    <View style={styles.expenseContainer}>
      <View style={styles.expenseDescription}>
        <Text>{title}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.expenseAmount}>
        <Text>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseContainer: {
    flexDirection: "row",
    backgroundColor: colors.lightblue,
    borderRadius: 4,
    justifyContent: "space-between",
    margin: 10,
    padding: 20,
    alignItems:'center'
  },
  expenseDescription: {
    gap: 10,
  },
  expenseAmount: {
    backgroundColor: colors.bluedark,
    borderRadius: 5,
    padding: 10,
    textAlign:'center'
  },
});
export default ExpenseItem;
