import {View,Text} from 'react-native'
import data from '../data/data.json';
import ExpensesOutPut from '../components/ExpensesOutPut/ExpensesOutPut';
function AllExpenses(){

    return(<View>
        
        <ExpensesOutPut expenses={data} expensesPeriod={"All Period"}/>
        </View>)
}


export default AllExpenses