import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface InvoiceProperties {
  
}

function Invoice(): JSX.Element {
  return (
    <View className="bg-white h-full pt-12">
      <Text>Realizar una nueva factura</Text>
      <Text>Ingresa los productos para realizar la factura</Text>
      <TouchableOpacity activeOpacity={0.7} className="bg-black p-2 rounded-2xl w-full flex-row items-center justify-center">
        <Text>Agregar productos</Text>
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        
      </ScrollView>
    </View>
  );
}

export { Invoice }