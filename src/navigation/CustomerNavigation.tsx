import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CustomerDashboardNavigation } from "./CustomerDashboardNavigation";
import { ProfileNavigation } from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

export function CustomerNavigation(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Daniel Batres"
        component={CustomerDashboardNavigation}
        options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
            name="UserProfile" 
            component={ProfileNavigation}
            options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}