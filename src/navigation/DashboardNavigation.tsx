import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from '../screens/Dashboard';
import { ProductForm } from "../screens/ProductForm";

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
      <Stack.Screen 
        name="ProductData"
        component={ProductForm}
      />
    </Stack.Navigator>
  );
}

export { DashboardNavigation };