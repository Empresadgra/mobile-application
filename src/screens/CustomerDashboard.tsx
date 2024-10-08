import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput, Image } from "react-native";
import { SearchBar } from "../components/SearchBar";
import Icon from 'react-native-vector-icons/Feather';

const categoriesData = [
  {
    name: "Comestibles",
    uri: "https://www.pngall.com/wp-content/uploads/4/Grocery-PNG-Photo.png",
    color: "bg-red-100"
  },
  {
    name: "Bebidas",
    uri: "https://assets.wedeliverlocal.co.uk/cdn/images/seopagesimages/drinks.png?w=650",
    color: "bg-yellow-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  },
  {
    name: "Snacks",
    uri: "https://i.pinimg.com/originals/d8/a1/94/d8a194a3f2806679a50e37778e487396.png",
    color: "bg-orange-100"
  }
]

function CustomerDashboard({ navigation }): JSX.Element {
  const goToStore = () => {
    navigation.navigate("Store");
  }

  const onNotificationPress = () => { };

  return (
    <View className="flex-1 p-4 bg-white pt-14">
      <View className="flex-row justify-between">
        <Text className="text-xl font-bold">Daniel Batres</Text>
        <View>
          <TouchableOpacity onPress={onNotificationPress} className="ml-4">
            <Icon name="bell" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar navigation={navigation} />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
        <TouchableWithoutFeedback onPress={goToStore}>
          <View className="bg-blue-100 h-32 rounded-2xl p-4 relative">
            <Text className="font-semibold text-lg">¡Visita nuestra tienda!</Text>
            <Text className="text-gray-500">Encuentra todo lo que necesitas</Text>
            <Image source={{ uri: "https://wallpapers.com/images/hd/isometric-storefront-illustration-png-as4irlheslkps0cs.png" }} resizeMode="cover" className="w-24 h-24 absolute bottom-2 right-2" />
          </View>
        </TouchableWithoutFeedback>
        <View className="mt-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">Tu balance</Text>
            <TouchableOpacity>
              <Text className="underline text-blue-500">Ver ranking</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-3 flex-row justify-between">
            <TouchableOpacity className="h-24 w-[49%] bg-gray-100 rounded-2xl flex justify-between p-3">
              <Text className="text-sm text-gray-500">Puntos de canjeo</Text>
              <Text className="justify-end self-end text-2xl font-bold">17,892</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-24 w-[49%] bg-gray-100 rounded-2xl flex justify-between p-3">
              <Text className="text-sm text-gray-500">Saldo disponible</Text>
              <Text className="justify-end self-end text-2xl font-bold">$28.97</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="mt-6 mb-6 text-lg font-semibold">Busca por categorias</Text>
        <View className="flex-row flex-wrap">
          {categoriesData.map((item, index) => (
            <TouchableOpacity key={index} className="w-1/3 p-1">
              <View className={`${item.color} h-24 rounded-lg justify-between p-2`}>
                <Text className="text-sm">{item.name}</Text>
                <Image
                  source={{ uri: item.uri }}
                  className="w-[70%] h-[70%] self-end"
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export { CustomerDashboard };