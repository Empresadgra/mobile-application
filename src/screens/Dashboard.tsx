import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';

function Dashboard(): JSX.Element {
  return (
    <View className="p-3 bg-white h-full">
      <TextInput
        placeholder="Buscar productos, secciones y mas"
        autoCapitalize="none"
        className="p-2 bg-gray-100 rounded-2xl"
      />
      <View className="mt-4 mb-4">
        <Text className="font-bold text-xl">Hello Daniel Batres</Text>
        <Text>Este es tu negocio</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex gap-2 max-h-[25%]"
      >
        <View className=" bg-red-500  w-[300px] h-full rounded-2xl  flex flex-col justify-between">
          <View className="p-2">
            <Text className="text-white font-bold text-xl"> Estadistica</Text>
            <Text className="text-white">Otro texto</Text>
          </View>
          <View className="h-[30%] bg-red-400 rounded-br-2xl rounded-bl-2xl flex items-end pr-4">
            <Text className='font-bold text-white text-lg'>$5,986.14</Text>
          </View>
        </View>
        <View className="bg-red-500 w-[300px] h-full rounded-2xl p-2">
          <Text className="text-white font-bold text-xl"> Estadistica</Text>
          <Text className="text-white">Otro texto</Text>
        </View>
        <View className="bg-red-500 w-[300px] h-full rounded-2xl p-2">
          <Text className="text-white font-bold text-xl"> Estadistica</Text>
          <Text className="text-white">Otro texto</Text>
        </View>
      </ScrollView>

      <View className="flex gap-2">
        <View className="bg-gray-100 h-[10%] rounded-2xl w-[50%]" ></View>
      </View>
    </View>
  );
}

export { Dashboard };