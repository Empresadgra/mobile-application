import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback } from "react-native";

function CustomerDashboard({ navigation }) {
    const goToStore = () => {
        navigation.navigate("Store");
    }

    return (
      <ScrollView horizontal={false} className="flex-1 bg-red p-4 pt-16 bg-white">
        <TouchableWithoutFeedback onPress={() => goToStore()}>
            <View className="bg-gray-100 h-32 rounded-2xl p-6">
              <Text>¡Visita nuestra tienda!</Text>
            </View>
        </TouchableWithoutFeedback>
        <Text className="mt-6 mb-6 text-lg">Buscar por categorias</Text>
        <View className="bg-gray-100 h-96 flex-1"></View>
        <Text className="mt-6 mb-6 text-lg">Explorar nuevos negocios</Text>
        <View className="h-52 bg-gray-100 rounded-lg"></View>
      </ScrollView>
  );
}

export { CustomerDashboard };