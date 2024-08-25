import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

function CategoryButton(): JSX.Element {
  return (
    <TouchableOpacity className="border-2 border-gray-100 rounded-2xl justify-between items-center p-2 mr-2">
      <Image source={{ uri: "https://www.kindpng.com/picc/m/215-2153705_bebidas-png-transparent-png.png" }} resizeMode="cover" className="w-10 h-10" />
      <Text className="text-xs pt-1 text-gray-500">Categoria</Text>
    </TouchableOpacity>
  );
} 

export { CategoryButton }