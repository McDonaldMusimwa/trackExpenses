import { View, TextInput, StyleSheet } from "react-native";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import colors from "../const/colors";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  console.log(editedExpenseId)
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if(isEditing){
        expenseCtx.updateExpense(editedExpenseId,expenseData)
    }else{
        expenseCtx.addExpense(expenseData)
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
    <ExpenseForm onCancel={cancelHandler} isEditing={isEditing} onSubmitHandler={confirmHandler}/>
    <TextInput/>
     
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color="red"
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.lightblue,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 6,
    borderTopWidth: 2,
    borderTopColor: colors.bluedark,
    alignItems: "center",
  },
 
});

export default ManageExpense;
