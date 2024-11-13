import { View, Text,StyleSheet } from "react-native";
import colors from "../../const/colors";

const ExpensesSummary = ({ expensesPeriod, expenses }) => {
    let total =0;
    function add(total,expenses){
       return total + expenses.amount
    }
    const added = expenses.reduce(add,0)
   
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>{expensesPeriod}</Text>
      <Text style={styles.sum}>Total  $ {added.toFixed(2) }</Text>
    </View>
  );
};
const styles = StyleSheet.create({
summaryContainer:{
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between',
    borderRadius:4,
    alignItems:'center',
    padding:8,
    backgroundColor:colors.lightblue

},
summaryTitle:{
    marginHorizontal:10,
    fontSize:15,
color:colors.bluedark

},
sum:{
    fontWeight:'bold',
    fontSize:20,
    color:colors.black
}
})
export default ExpensesSummary;
