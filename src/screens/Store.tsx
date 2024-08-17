import React from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

function Store({ navigation }): JSX.Element {
  return (
    <ScrollView className="pt-12 bg-white flex-1 relative">
      <View className="bg-gray-300 h-28"></View>
      <View className="h-24  border-b-2 border-gray-100 flex-row">
        <View className="w-24"></View>
        <View className="pl-3 pt-4">
          <Text className="text-lg font-semibold">Nombre del negocio</Text>
          <Text className="text-sm text-gray-400">Categoria del negocio</Text>
        </View>
      </View>
      <View className="p-6 h-32 border-b-2 border-gray-100">
        <View className="flex-row items-center gap-3">
          <View className="bg-gray-300 rounded-full h-14 w-14"></View>
          <View>
            <Text className="font-semibold">Nombre del usuario</Text>
            <Text className="text-gray-400 text-sm">12956784</Text>
          </View>
        </View>
      </View>
      <View className="bg-white w-20 h-20 rounded-xl absolute top-24 left-4 b-gray-600 border-2 border-gray-100"></View>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View className="absolute top-4 left-4 bg-white h-10 w-10 rounded-lg flex justify-center items-center">
          <Icon name="angle-left" size={22} color="black"/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export { Store };