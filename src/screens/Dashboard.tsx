import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import { ActionButton } from '../components/ActionButton';
import { StatisticCard } from '../components/StatisticCard';

function Dashboard(): JSX.Element {
  return (
    <View className="p-2 h-full bg-white">
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
        className="flex max-h-[25%]"
      >
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </ScrollView>
      <View className="flex-row w-full mt-4 mb-4 max-h-[15%] justify-between">
        <ActionButton />
        <ActionButton />
      </View>
    </View>
  );
}

export { Dashboard };