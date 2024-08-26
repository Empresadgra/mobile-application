import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Invoice } from "../screens/Invoice";
import { ConfirmPurchase } from "../screens/ConfirmPurchase";
import { Product } from "../components/Product";

const Stack = createStackNavigator();

function InvoiceNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewInvoice"
        component={Invoice}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name="ShowProduct"
        component={Product}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={ConfirmPurchase}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export { InvoiceNavigation };
