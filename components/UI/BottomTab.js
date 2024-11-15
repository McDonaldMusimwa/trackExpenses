import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../../screens/AllExpenses";
import RecentExpense from "../../screens/RecentExpense";
import colors from "../../const/colors";
import {Ionicons} from '@expo/vector-icons';
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

function BottomTab() {
  const navigation = useNavigation()
  return (
    <Tab.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:colors.bluedark
      },
      headerTintColor:colors.white,
      tabBarStyle:{backgroundColor:colors.bluedark},
      tabBarActiveTintColor:{backgroundColor:colors.black},
      headerRight:({tintColor})=> <IconButton icon="add" color={tintColor} size={24} onPress={()=>{
        navigation.navigate("ManageExpense")
      }}/>

    }}>
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
        title:"All Expenses",
        tabBarLabel:"All",
        tabBarIcon:({size,color})=><Ionicons name='hourglass' size={size} color={color} />
      }}/>
      <Tab.Screen name="RecentExpenses" component={RecentExpense} options={{
        title:"Recent Expenses",
        tabBarLabel:"Recent",
        tabBarIcon:({size,color})=><Ionicons name='calendar' size={size} color={color} />
      }}/>
    </Tab.Navigator>
  );
}

export default BottomTab;
