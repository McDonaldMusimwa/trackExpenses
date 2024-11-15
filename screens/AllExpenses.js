import {View,Text} from 'react-native';
import { useContext } from 'react';

import ExpensesOutPut from '../components/ExpensesOutPut/ExpensesOutPut';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext)

    return(<View>
        
        <ExpensesOutPut expenses={expensesCtx.expenses} expensesPeriod={"All Period"}/>
        </View>)
}


export default AllExpenses