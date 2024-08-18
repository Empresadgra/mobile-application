import React from "react";
import  { createStackNavigator } from "@react-navigation/stack";
import { PurchaseHistory } from "../screens/PurchaseHistory";

const Stack = createStackNavigator();

function PurchaseHistoryNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PurchaseHistoryMain"
        component={PurchaseHistory}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export { PurchaseHistoryNavigation }