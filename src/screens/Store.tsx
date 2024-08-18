import React from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { ProductItem } from "../components/ProductItem";

function Store({ navigation }): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="pt-12 bg-white flex-1 relative">
      <View className="bg-gray-300 h-28"></View>
      <View className="h-24  border-b-2 border-gray-100 flex-row">
        <View className="w-24"></View>
        <View className="pl-3 pt-4">
          <Text className="text-lg font-semibold">Nombre del negocio</Text>
          <Text className="text-sm text-gray-400">Categoria del negocio</Text>
        </View>
      </View>
      <View className="p-4 pt-4 h-44 border-b-2 border-gray-100">
        <View className="flex-row items-center gap-3">
          <View className="bg-gray-300 rounded-full h-14 w-14"></View>
          <View>
            <Text className="font-semibold">Daniel Garcia Batres</Text>
            <Text className="text-gray-400 text-sm">12956784</Text>
          </View>
        </View>
        <View className="flex-row w-full h-[75%] justify-between pt-4 pb-4">
          <View className="bg-gray-100 rounded-2xl w-full h-full max-w-[49%] flex justify-between p-2">
            <Text className="text-sm text-gray-500">Puntos de canjeo</Text>
            <Text className="justify-end self-end">17,892</Text>
          </View>
          <View className="bg-gray-100 rounded-2xl w-full h-full max-w-[49%] flex justify-between p-2">
            <Text className="text-sm text-gray-500">Saldo disponible</Text>
            <Text className="justify-end self-end">$28.23</Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="p-3 pl-5 pr-2 border-b-2 border-gray-100 flex-row gap-6">
        <Text>Principal</Text>
        <Text>Comestibles</Text>
        <Text>Bebidas</Text>
        <Text>Hogar</Text>
        <Text>Categoria</Text>
        <Text>Categoria</Text>
        <Text>Categoria</Text>
      </ScrollView>
      <View className="pt-4 pb-4">
        <Text className="pl-4 text-base mb-4">Los mas buscados</Text>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="flex-row pl-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ScrollView>
      </View>
      <View className="pt-4 pb-4">
        <Text className="pl-4 text-base mb-4">Productos de temporada</Text>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="flex-row pl-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ScrollView>
      </View>
      <View className="pt-4 pb-4">
        <Text className="pl-4 text-base mb-4">Productos de temporada</Text>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="flex-row pl-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ScrollView>
      </View>
      <View className="bg-white w-20 h-20 rounded-xl absolute top-24 left-4 b-gray-600 border-2 border-gray-100"></View>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View className="absolute top-4 left-4 bg-white h-10 w-10 rounded-lg flex justify-center items-center">
          <Icon name="chevron-left" size={22} color="black"/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export { Store };