import { useReducer, createContext, useContext } from "react";
import data from "../data/data.json";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, date, amount }) => {},
  updateExpense: ({ id, data }) => {},
  deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        { ...action.payload, key: Math.random().toFixed(2).toString() },
        ...state,
      ];
    case "DELETE":
      return state.filter((expense) => expense.key !== action.payload);
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.key === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedState = [...state];
      updatedState[updatableExpenseIndex] = updatedItem;
      return updatedState;
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer,data);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
