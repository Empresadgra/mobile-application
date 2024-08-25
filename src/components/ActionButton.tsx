import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationProperties, RootStackParamList } from '../navigation/types';

const ActionButton = ({ navigation, navigate }: NavigationProperties): JSX.Element => {
  return (
    <TouchableOpacity className="bg-gray-100 h-full rounded-2xl w-full max-w-[49%] flex justify-between" onPress={() => navigation.navigate(navigate)}>
      <View className="flex-row justify-between pt-3 pl-4 pr-3">
        <View className="bg-gray-950 w-8 h-8 rounded-xl flex justify-center items-center">
          <Icon name="home" color="white" />
        </View>
        <Icon name="plus" color="black" />
      </View>
      <View className="pb-3 pl-3">
        <Text>Nueva factura</Text>
      </View>
    </TouchableOpacity>
  );
}

export { ActionButton };