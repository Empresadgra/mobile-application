import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Product(): JSX.Element {
  return (
    <View className="h-full pt-14 bg-white">
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: "https://preview.us.coca-cola.com/content/dam/nagbrands/us/coke/en/value-collection/coca-cola-1.25-liter-new.png" }} resizeMode="cover" className="w-80 h-80 self-center" />
        <View className="p-4">
          <Text className="font-semibold text-xl">Nombre del producto que se esta mostrando</Text>
          <Text>Breve descripcion del producto</Text>
          <View className="flex-row mt-4">
            <View className="flex-row flex-1 justify-between items-center border-2 border-gray-100 rounded-2xl p-1">
              <TouchableOpacity className="p-1 bg-gray-100 rounded-full">
                <Icon name="minus" size={16} color="black" />
              </TouchableOpacity>
              <Text className="pl-2 pr-2 text-lg">1</Text>
              <TouchableOpacity className="p-1 bg-gray-100 rounded-full">
                <Icon name="plus" size={16} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="ml-2 w-60 border-2 border-gray-400 rounded-2xl items-center justify-center">
              <Text className="">Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export { Product }