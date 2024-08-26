import React from "react";
import { Text, TextInput, View } from "react-native";

function ConfirmPurchase(): JSX.Element {
  return (
    <View className="bg-white p-4 pt-12 h-full">
      <View className="justify-center items-center mb-4">
        <Text className="font-bold text-xl">Resumen de pedido</Text>
      </View>
      <View className="mt-4">
        <Text>Codigo de cliente</Text>
        <View className="bg-gray-100 p-2 rounded-2xl mt-2">
          <TextInput placeholder="Ingresar el codigo del cliente" keyboardType="numeric" />
        </View>
        </View>
    </View>
  );
}

export { ConfirmPurchase }