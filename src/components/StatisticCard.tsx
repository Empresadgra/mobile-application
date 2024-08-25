import React from 'react'
import { View, Text } from 'react-native';

const StatisticCard = (): JSX.Element => {
  return (
    <View className=" bg-red-500 w-80 mr-2 rounded-2xl flex flex-col justify-between">
      <View className="p-2">
        <Text className="text-white font-bold text-xl"> Estadistica</Text>
        <Text className="text-white">Otro texto</Text>
      </View>
      <View className="h-[30%] bg-red-400 rounded-br-2xl rounded-bl-2xl flex items-end pr-4">
        <Text className="font-bold text-white text-lg">$5,986.14</Text>
      </View>
    </View>
  );
}

export { StatisticCard }