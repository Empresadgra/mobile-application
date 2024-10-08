import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import { CustomerDashboard } from '../screens/CustomerDashboard';
import { GeneralSearch } from "../screens/GeneralSearch";
import { Store } from "../screens/Store";

const Stack = createStackNavigator();

function CustomerDashboardNavigation(): JSX.Element {
  const handleNotificationPress = () => {}

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerMain"
        component={CustomerDashboard}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name='Store'
        component={Store}
        options={{
          title:"",
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GeneralSearch"
        component={GeneralSearch}
        options={{
          title: "",
          headerTransparent: true,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export { CustomerDashboardNavigation };