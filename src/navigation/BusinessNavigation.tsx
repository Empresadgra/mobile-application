import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import { DashboardNavigation } from "./DashboardNavigation";
import { ProfileNavigation } from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

function BusinessNavigation(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BusinessDashboard"
        component={DashboardNavigation}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home"color={color}size={size} />
          ),
        }}
      />
      <Tab.Screen name="UserProfile"component={ProfileNavigation}options={{tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user"color={color}size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export { BusinessNavigation }