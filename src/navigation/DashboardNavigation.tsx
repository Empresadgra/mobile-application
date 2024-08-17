import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from '../screens/Dashboard';

const Stack = createStackNavigator();

function DashboardNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BusinessMain"
        component={Dashboard}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export { DashboardNavigation };