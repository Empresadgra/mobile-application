import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ProductCard } from "../components/ProductCard";
import { NavigationProperties } from "../navigation/types";

interface InvoiceProperties {
  
}

function Invoice({ navigation }: NavigationProperties): JSX.Element {
  const confirmPurchase = () => {
    navigation.navigate("Confirm");
  }

  return (
    <View className="bg-white h-full pt-12">
      <View className="border-b-2 border-gray-100 justify-center p-6 ">
        <Text className="font-bold text-lg">Mi carrito de compras</Text>
        <Text className="text-gray-400">Ingresa los productos para realizar la compra</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <View className="m-2 bg-gray-100 p-4 rounded-2xl">
          <Text className="font-bold text-lg">Resumen de pedido</Text>
          <Text className="text-gray-400 mb-4">Este es el resumen de tu pedido</Text>
          <View className="flex-row justify-between items-center border-b-2 border-gray-200 pb-4">
            <Text>Cargos totales por pedido</Text>
            <Text className="font-bold">$50.67</Text>
          </View>
          <View className="flex-row justify-between items-center pt-4">
            <Text className="font-bold text-lg">Totales:</Text>
            <Text className="font-bold text-lg">$50.67</Text>
          </View>
        </View>
      </ScrollView>
      <View className="border border-gray-100 p-4 pt-6 pb-6 flex-row justify-between items-center rounded-tr-2xl rounded-tl-2xl">
        <Text className="font-bold text-lg">Total: $87.99</Text>
        <TouchableOpacity className="bg-black rounded-2xl p-2 pl-4 pr-2 flex-row" onPress={confirmPurchase}>
          <Text className="text-white font-bold">Continuar</Text>
          <Icon name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Invoice }