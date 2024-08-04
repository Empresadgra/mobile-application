import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

function ProfileNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export { ProfileNavigation };
