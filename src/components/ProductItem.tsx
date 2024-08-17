import React from "react";
import { Text, View } from "react-native";

const ProductItem = (): JSX.Element => {
  return (
    <View className="h-44 border-2 border-gray-200 rounded-2xl w-40 mr-3">
      <View className="h-[55%] bg-gray-200 rounded-tr-xl rounded-tl-xl"></View>
      <View className="h-[45%] p-2 flex justify-between">
        <Text className="font-semibold">Nombre del producto version extensa</Text>
        <View className="flex-row justify-between">
          <Text className="text-green-600">8 disponibles</Text>
          <Text className="font-bold">$10.98</Text>
        </View>
      </View>
    </View>
  );
}

export { ProductItem };