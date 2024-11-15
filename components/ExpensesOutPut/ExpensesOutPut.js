import { View, StyleSheet,Text } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import colors from "../../const/colors";

function ExpensesOutPut({ expenses, expensesPeriod }) {
  let screen;
  if (expenses.length === 0) {
    screen = <Text style={styles.noExpense}>No Expense</Text>;
  } else {
    screen = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses} />
      {screen}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  noExpense:{
    padding:20,
    fontSize:20,
    color:colors.black,
    marginTop:50,
    fontWeight:'bold',
    textAlign:'center'
  }
});
export default ExpensesOutPut;
