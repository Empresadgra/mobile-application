import React from "react";
import { Button, Text, View } from "react-native";
import useAuth from "../hooks/useAuth";

function Profile(): JSX.Element {
  const { changeRoleView } = useAuth();

  return (
    <View>
      <Text>This is your profile</Text>
      <Button title="Change role view" onPress={() => changeRoleView()} />
    </View>
  );
}

export { Profile };
