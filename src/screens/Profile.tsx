import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useAuth from "../hooks/useAuth";

function Profile(): JSX.Element {
  const { isCustomer, changeRoleView } = useAuth();

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} className="pt-14 bg-white">
      <View className="flex-row p-4 items-center gap-3 border-b-2 border-gray-200">
        <Image source={{ uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }} resizeMode="cover" className="w-24 h-24 rounded-full" />
        <View>
          <Text className="text-xl font-semibold">Daniel Garcia Batres</Text>
          <Text className="text-sm text-gray-400">Codigo de usuario: 189289</Text>
        </View>
      </View>
      <TouchableOpacity className="flex-row justify-between items-center p-4 pt-7 pb-7 border-b-2 border-gray-200">
        <View className="flex-row items-center">
          <Icon name="user" size={24} color="black" />
          <View className="pl-3">
            <Text className="text-lg">Informacion personal</Text>
            <Text className="text-xs text-gray-400">Edita tu informacion personal</Text>
          </View>
        </View>
        <Icon name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row justify-between items-center p-4 pt-7 pb-7 border-b-2 border-gray-200" onPress={changeRoleView}>
        <View className="flex-row items-center">
          <Icon name="copy" size={24} color="black" />
          <View className="pl-3">
            <Text className="text-lg">Cambiar a vista de {!isCustomer ? "cliente" : "empleado"}</Text>
            <Text className="text-xs text-gray-400">Intercambiar rol de plataforma</Text>
          </View>
        </View>
        <Icon name="repeat" size={24} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
}

export { Profile };
