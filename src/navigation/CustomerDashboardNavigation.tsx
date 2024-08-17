import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import { CustomerDashboard } from '../screens/CustomerDashboard';

const Stack = createStackNavigator();

function CustomerDashboardNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerMain"
        component={CustomerDashboard}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export { CustomerDashboardNavigation };