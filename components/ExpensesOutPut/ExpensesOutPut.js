import { View,StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutPut({ expenses,expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses}/>
      <ExpensesList expenses={expenses} />
    </View>
  );
}
const styles= StyleSheet.create({
    container:{
        padding:24,
        
    }
})
export default ExpensesOutPut