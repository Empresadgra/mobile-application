import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { ScrollView, TextInput, View } from "react-native";
import { CategoryButton } from "../components/CategoryButton";
import { ProductCard } from "../components/ProductCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

interface SearcherProperties {
  navigation: StackNavigationProp<RootStackParamList>
}

function Searcher({ navigation }: SearcherProperties): JSX.Element {
  return (
    <View className="bg-white h-full pt-14">
      <View>
        <View className="pr-4 pl-4 flex-row justify-between items-center pl-2 pr-2 m-4 rounded-2xl bg-gray-100">
          <TextInput placeholder="Buscar productos" className="p-2 w-[90%]" />
          <Icon name="search" size={22} color="black" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row pb-4 pr-4 pl-4">
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
        </ScrollView>
      </View>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} className="border-t-2 border-gray-100">
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
        <ProductCard navigation={navigation} navigate="ShowProduct" />
      </ScrollView>
    </View>
  );
}

export { Searcher };

