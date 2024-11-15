import {View,Text} from 'react-native';
import {useContext} from 'react'
import { ExpensesContext } from '../store/expenses-context';
import data from '../data/data.json';
import ExpensesOutPut from '../components/ExpensesOutPut/ExpensesOutPut';
function RecentExpense(){
  const expensesCtx = useContext(ExpensesContext)
    const filteredinvoices = expensesCtx.expenses.filter(
        (invoice) => new Date(invoice.date) < new Date()
      );

    return(<View>
        <ExpensesOutPut expenses={filteredinvoices} expensesPeriod={'Last 7 Days'}/>
        </View>)
}


export default RecentExpense