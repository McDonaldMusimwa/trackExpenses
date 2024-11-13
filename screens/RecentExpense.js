import {View,Text} from 'react-native';
import { useState } from 'react';
import data from '../data/data.json';
import ExpensesOutPut from '../components/ExpensesOutPut/ExpensesOutPut';
function RecentExpense(){
    const filteredinvoices = data.filter(
        (invoice) => new Date(invoice.date) < new Date()
      );

    return(<View>
        <ExpensesOutPut expenses={filteredinvoices} expensesPeriod={'Last 7 Days'}/>
        </View>)
}


export default RecentExpense