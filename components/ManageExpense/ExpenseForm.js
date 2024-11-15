import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "./Input";
import colors from "../../const/colors";
import Button from "../UI/Button";
function ExpenseForm({onCancel,onSubmitHandler,isEditing}) {
  const [input, setInputHandler] = useState({
    title: "",
    date: "",
    amount: "",
  });

  function inputHandler(key, incomingInput) {
    setInputHandler((currentState) => {
      return {
        ...currentState,
        [key]: incomingInput,
      };
    });
  }

  function submitHandler(){
    let date = new Date(input.date)
    const formatedDate = date.toISOString()
    const submitData = {
        amount:+input.amount,
        date:formatedDate.slice(0, 10),
        title:input.title
    }
    onSubmitHandler(submitData)
  }
  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleText}>Your Expense</Text>
      <View style={styles.topFormElements}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputHandler.bind(this, 'amount'),
            value: input.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: "10",
            onChangeText: inputHandler.bind(this, 'date'),
            value: input.date,
          }}
        />
      </View>
      <Input
        label="title"
        textInputConfig={{
          maxLength: 20,
          onChangeText: inputHandler.bind(this, 'title'),
          value: input.title,
          multiline: true,
        }}
      />
      <View style={styles.buttonsContainer}>
      <Button title="Cancel" mode="flat" onPress={onCancel}></Button>
      <Button
        title={isEditing ? "Update" : "Add"}
        onPress={submitHandler}
      ></Button>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    marginTop: 40,
    
  },
  titleText: {
    color: colors.bluedark,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  topFormElements: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ExpenseForm;
