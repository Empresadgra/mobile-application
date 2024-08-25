import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { DashboardNavigation } from "./DashboardNavigation";
import { ProfileNavigation } from "./ProfileNavigation";
import { Invoice } from "../screens/Invoice";
import { Searcher } from "../screens/Searcher";
import { CustomerDashboard } from "../screens/CustomerDashboard";

const Tab = createBottomTabNavigator();

function BusinessNavigation(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BusinessDashboard"
        component={CustomerDashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home"color={color}size={size} />
          ),
          title: "",
          headerTransparent: true
        }}
      />
      <Tab.Screen
        name="Searcher"
        component={Searcher}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
          title: "",
          headerTransparent: true
        }}
      />
      <Tab.Screen 
        name="UserProfile"
        component={ProfileNavigation}
        options={{tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user"color={color}size={size} />
          ),
          title: "",
          headerTransparent: true
        }}
      />
      <Tab.Screen 
        name="NewInvoice"
        component={Invoice}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
          title: "",
          headerTransparent: true
        }}
      />
    </Tab.Navigator>
  );
}

export { BusinessNavigation }