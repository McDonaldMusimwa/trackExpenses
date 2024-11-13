import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      )}
    />
  );
};

export default ExpensesList;
