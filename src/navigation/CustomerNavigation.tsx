import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CustomerDashboardNavigation } from "./CustomerDashboardNavigation";
import { SearchNavigation } from "./SearchNavigation";
import { ProfileNavigation } from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

export function CustomerNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderTopWidth: 0,
          height: 70
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen
        name="CustomerDashboard"
        component={CustomerDashboardNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
        />
        <Tab.Screen 
          name="SearchProducts"
          component={SearchNavigation}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
              ),
          }}
        />
      <Tab.Screen
        name="UserProfile" 
        component={ProfileNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        )
      }}
    />
    </Tab.Navigator>
  );
}