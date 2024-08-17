import React from 'react';
import  { createStackNavigator } from "@react-navigation/stack";
import { Searcher } from "../screens/Searcher";

const Stack = createStackNavigator();

function SearchNavigation(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearcherMain"
        component={Searcher}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export { SearchNavigation };