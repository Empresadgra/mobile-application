import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { Text, TouchableOpacity, View } from "react-native";

interface ProfileOptionData {
  iconName: string,
  lastIconName?: string
  optionName: string,
  optionMessage: string,
  onPressOption?: () => void
}

function ProfileOption(props: ProfileOptionData): JSX.Element {
  return (
    <TouchableOpacity className="flex-row justify-between items-center p-4 pt-7 pb-7 border-b-2 border-gray-100" onPress={props.onPressOption}>
      <View className="flex-row items-center">
        <Icon name={props.iconName} size={24} color="black" />
        <View className="pl-3">
          <Text className="text-lg">{props.optionName}</Text>
          <Text className="text-xs text-gray-400">{props.optionMessage}</Text>
        </View>
      </View>
      <Icon name={props.lastIconName ?? "chevron-right"} size={24} color="black" />
    </TouchableOpacity>
  );
}

export { ProfileOption }