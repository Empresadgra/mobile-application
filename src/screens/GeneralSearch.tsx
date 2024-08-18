import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

function GeneralSearch({ navigation }): JSX.Element {
  return (
    <View className="p-3 pt-16 bg-white">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={28} />
        </TouchableOpacity>
        
        <View className="flex-row items-center justify-between bg-gray-100 rounded-2xl p-2 pl-4">
        <TextInput placeholder="Buscar producto o negocio" className="bg-gray-100 rounded-2xl w-[82%]" autoFocus={true} />
        <Icon name="search" size={20} color="gray" className="mr-2" />
      </View>
      </View>
      <View></View>
    </View>
  );
}

export { GeneralSearch }